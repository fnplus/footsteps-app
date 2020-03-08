import React, { Component } from "react"
import { CameraFilled } from "@ant-design/icons"
import { Row, Col } from "antd"
import FileUploader from "react-firebase-file-uploader"
import { WithContext as ReactTags } from "react-tag-input"
import gql from "graphql-tag"
import { navigate } from "gatsby"

import firebase from "firebase/app"
import "firebase/storage"

import styles from "./styles.module.css"

import { client } from "../../apollo/client"

export default class Settings extends Component {
  state = {
    id: "",
    // personal
    first_name: "",
    last_name: "",
    email: "",
    profile_pic: "",
    username: "",
    // about
    about: "",
    bio: "",
    skills: "",
    skills_array: [],
    // social
    facebook: "",
    github: "",
    linkedin: "",
    twitter: "",
    // image upload
    isUploading: false,
    progress: 0,
    pic: "",
    error: false,
  }

  componentDidMount() {
    let {
      first_name,
      last_name,
      about,
      bio,
      username,
      email,
      skills,
      profile_pic,
      id,
      facebook,
      twitter,
      github,
      linkedin,
    } = this.props.data

    let skills_array = skills.split(",").map(skill => ({
      id: skill,
      text: skill,
    }))

    if (!facebook) {
      facebook = "https://facebook.com/"
    }

    if (!github) {
      github = "https://github.com/"
    }

    if (!twitter) {
      twitter = "https://twitter.com/"
    }

    if (!linkedin) {
      linkedin = "https://linkedin.com/in/"
    }

    this.setState({
      first_name,
      last_name,
      about,
      bio,
      username,
      email,
      skills,
      profile_pic,
      skills_array,
      id: id,
      facebook,
      twitter,
      github,
      linkedin,
    })
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  urlValidator = e => {
    let check = e.target.value.match(
      /^((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
    )
    if (check == null) {
      alert("The url is not valid")
    } else {
      const { name, value } = e.target
      this.setState({
        [name]: value,
      })
    }
  }

  // Image Upload Functions

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })

  handleProgress = progress => this.setState({ progress })

  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }

  handleUploadSuccess = filename => {
    this.setState({ pic: filename, progress: 100, isUploading: false })
    firebase
      .storage()
      .ref("Profile_pic")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ profile_pic: url }))
  }

  // Tag Handling Functions

  getSkillsFromSkillsArray = skills_array => {
    let skills = ""
    skills_array.forEach((skill, i) => {
      if (i !== this.state.skills_array.length - 1) {
        skills += skill.text + ","
      } else {
        skills += skill.text
      }
    })
    return skills
  }

  // Avoid unnecessary setState calls to avoid unnecessary rerenders
  handleTagDelete = i => {
    let { skills_array } = this.state
    skills_array = skills_array.filter((_tag, index) => index !== i)
    const skills = this.getSkillsFromSkillsArray(skills_array)
    this.setState({
      skills_array,
      skills,
    })
  }

  // Avoid unnecessary rerenders
  handleTagAddition = skill => {
    let { skills_array } = this.state

    if (skills_array.length < 10) {
      skills_array.push(skill)
      const skills = this.getSkillsFromSkillsArray(skills_array)
      this.setState({ skills_array, skills })
    }
  }

  validate_details = () => {
    let { first_name, last_name, about, bio, profile_pic } = this.state
    return first_name && last_name && about && bio && profile_pic
  }

  update_user = () => {
    if (this.validate_details()) {
      this.setState({
        error: false,
      })

      let {
        id,
        first_name,
        last_name,
        bio,
        about,
        linkedin,
        facebook,
        github,
        skills,
        profile_pic,
        twitter,
      } = this.state

      client
        .mutate({
          mutation: UPDATE_USER_INFO_MUTATION_APOLLO,
          variables: {
            id,
            first_name,
            last_name,
            bio,
            about,
            linkedin,
            facebook,
            github,
            twitter,
            skills,
            profile_pic,
          },
        })
        .then(res => {
          alert("Successfully Updated Profile")
          navigate("/")
        })
    } else {
      this.setState({
        error: true,
      })
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Settings</h1>

        <h2 className={styles.sub_heading}>Personal</h2>
        <Row>
          <Col xs={24} lg={12}>
            <div className={styles.input_label}>First Name</div>
            <input
              type="text"
              className={styles.input}
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
              name="first_name"
            />

            <div className={styles.input_label}>Last Name</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
              name="last_name"
            />

            <div className={styles.input_label}>Username</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Username"
              value={this.state.username}
              name="username"
              disabled
            />

            <div className={styles.input_label}>Email ID</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Email ID"
              value={this.state.email}
              name="last_name"
              disabled
            />
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.pic_container}>
              <img
                className={styles.profile_pic}
                src={this.state.profile_pic}
                alt=""
              />
              <label className={styles.add_image_btn}>
                <CameraFilled></CameraFilled>
                <FileUploader
                  hidden
                  accept="image/*"
                  name="profile_pic"
                  randomizeFilename
                  storageRef={firebase.storage().ref("Profile_pic")}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
              </label>
            </div>
          </Col>
        </Row>

        <Row>
          <h2 className={styles.sub_heading}>About</h2>

          <Col xs={24} lg={13}>
            <div className={styles.input_label}>Bio</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Bio"
              value={this.state.bio}
              onChange={this.handleInputChange}
              name="bio"
            />

            <div className={styles.input_label}>Description</div>
            <textarea
              type="text"
              className={styles.input}
              placeholder="Tell us about yourself"
              value={this.state.about}
              onChange={this.handleInputChange}
              name="about"
            />
          </Col>

          <Col xs={24} lg={11}>
            <div className={styles.input_label}>Skills</div>
            <ReactTags
              tags={this.state.skills_array}
              placeholder={"Enter your skills"}
              delimiters={[188, 13]}
              handleDelete={this.handleTagDelete}
              handleAddition={this.handleTagAddition}
              allowDragDrop={false}
              inputFieldPosition="top"
              autofocus={false}
            />
          </Col>
        </Row>

        <Row>
          <h2 className={styles.sub_heading}>Socials</h2>
          <Col xs={24} lg={12}>
            <div className={styles.input_label}>Github</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Github"
              value={this.state.github}
              onChange={this.urlValidator}
              name="github"
            />
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.input_label}>Facebook</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Facebook"
              value={this.state.facebook}
              onChange={this.urlValidator}
              name="facebook"
            />
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.input_label}>Linkedin</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Linkedin"
              value={this.state.linkedin}
              onChange={this.urlValidator}
              name="linkedin"
            />
          </Col>

          <Col xs={24} lg={12}>
            <div className={styles.input_label}>Twitter</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Twitter"
              value={this.state.twitter}
              onChange={this.urlValidator}
              name="twitter"
            />
          </Col>
        </Row>
        <div className={styles.error_container}>
          {this.state.error ? (
            <div className={styles.error}>Please Fill all the Fields</div>
          ) : null}
        </div>
        <div className={styles.btn_container}>
          <div className={styles.update_btn} onClick={this.update_user}>
            Update Profile
          </div>
        </div>
      </div>
    )
  }
}

export const UPDATE_USER_INFO_MUTATION_APOLLO = gql`
  mutation update_user_info(
    $id: uuid!
    $about: String!
    $bio: String!
    $facebook: String!
    $first_name: String!
    $github: String!
    $last_name: String!
    $linkedin: String!
    $twitter: String!
    $profile_pic: String!
    $skills: String!
  ) {
    update_Users(
      where: { id: { _eq: $id } }
      _set: {
        about: $about
        bio: $bio
        facebook: $facebook
        first_name: $first_name
        github: $github
        last_name: $last_name
        linkedin: $linkedin
        profile_pic: $profile_pic
        skills: $skills
        twitter: $twitter
      }
    ) {
      affected_rows
      returning {
        id
        username
        email
      }
    }
  }
`
