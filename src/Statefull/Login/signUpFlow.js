import React, { Component } from "react"
import gql from "graphql-tag"
import uuid from "uuid"
import { Row, Col, Icon } from "../../Stateless/Layout/node_modules/antd"
import { WithContext as ReactTags } from "react-tag-input"

import firebase from "../../Stateless/Layout/node_modules/firebase/app"
import "../../Stateless/Layout/node_modules/firebase/auth"

import { client } from "../../apollo/client"

import SignUpstyles from "../../styles/signUp.module.css"

export class signUp extends Component {
  state = {
    step: 0,
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    about: "",
    bio: "",
    skills: "",
    skills_array: [],
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    registered_usernames: [],
    username_error: false,
    step_error: false,
  }

  componentDidMount() {
    this.setState({
      first_name: firebase.auth().currentUser.displayName.split(" ")[0],
      last_name: firebase.auth().currentUser.displayName.split(" ")[1],
      email: firebase.auth().currentUser.email,
    })

    client
      .query({
        query: GET_ALL_USERNAMES_QUERY_APOLLO,
      })
      .then(res => {
        let registered_usernames = []
        res.data.Users.map(user => {
          registered_usernames.push(user.username)
          return 0
        })
        this.setState({
          registered_usernames,
        })
      })
  }

  signup = () => {
    let data = this.state

    client
      .mutate({
        mutation: CREATE_USER_MUTATION_APOLLO,
        variables: {
          email: firebase.auth().currentUser.email,
          id: uuid.v4(),
          first_name: data.first_name,
          last_name: data.last_name,
          username: data.username,
          profile_pic: firebase.auth().currentUser.photoURL,
          about: data.about,
          bio: data.bio,
          skills: data.skills,
          github: data.github,
          linkedin: data.linkedin,
          facebook: data.facebook,
          twitter: data.twitter,
        },
      })
      .then(res => {
        this.props.updateUserId(res.data.insert_Users.returning[0].id, true)
      })
      .catch(err => {
        console.log("Got an error", err)
        this.props.updateUserId("", false)
        firebase.auth().signOut()
      })
  }

  handleInputChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value,
    })
  }

  handleUsernameChange = e => {
    let enteredUsername = e.target.value

    if (enteredUsername.match("^[a-z0-9_]*$") && enteredUsername.length <= 15) {
      this.setState({
        username: enteredUsername,
      })
    }

    if (this.state.registered_usernames.indexOf(enteredUsername) > -1) {
      this.setState({
        username_error: true,
      })
    } else {
      this.setState({
        username_error: false,
      })
    }
  }

  nextStep = () => {
    let { step } = this.state

    if (step === 1) {
      if (
        !this.state.username_error &&
        this.state.first_name !== "" &&
        this.state.last_name !== "" &&
        this.state.username !== ""
      ) {
        this.setState({
          step: 2,
          step_error: false,
        })
      } else {
        this.setState({
          step_error: true,
        })
      }
    } else if (step === 2) {
      if (
        this.state.about !== "" &&
        this.state.bio !== "" &&
        this.state.skills_array.length !== 0
      ) {
        let skills = ""
        this.state.skills_array.map((skill, i) => {
          if (i !== this.state.skills_array.length - 1) {
            skills += skill.text + ","
            return 0
          } else {
            skills += skill.text
            return 0
          }
        })
        this.setState({
          step: 3,
          step_error: false,
          skills,
        })
      } else {
        this.setState({
          step_error: true,
        })
      }
    } else {
      this.setState({
        step: this.state.step + 1,
      })
    }
  }

  handleTagDelete = i => {
    const { skills_array } = this.state
    this.setState({
      skills_array: skills_array.filter((tag, index) => index !== i),
    })
  }

  handleTagAddition = tag => {
    if (this.state.skills_array.length < 10) {
      this.setState(state => ({ skills_array: [...state.skills_array, tag] }))
    }
  }

  render() {
    if (this.state.step === 0) {
      return (
        <div className={SignUpstyles.step0_container}>
          <Row>
            <Col xs={24} lg={12}>
              <img
                className={SignUpstyles.step0_img}
                src={require("../../images/signUp.png")}
                alt=""
              />
            </Col>
            <Col xs={24} lg={12} className={SignUpstyles.step0_content}>
              <h1>Hey {firebase.auth().currentUser.displayName}!</h1>
              <h2>Welcome to Footsteps!</h2>
              <h3>
                We are glad to have you on board. Let us get to know you better!
              </h3>
              <div onClick={this.nextStep}>
                Get started{" "}
                <Icon style={{ marginLeft: "10px" }} type="arrow-right"></Icon>
              </div>
            </Col>
          </Row>
        </div>
      )
    } else if (this.state.step === 1) {
      return (
        <div className={SignUpstyles.step1_container}>
          <Row>
            <Col xs={24} lg={10} className={SignUpstyles.steps_content}>
              <h1>01</h1>
              <h2>/ 03</h2>

              <h3 style={{ opacity: "1" }}>Basic Information</h3>
              <h3>About You</h3>
              <h3>Your Socials</h3>
            </Col>
            <Col xs={24} lg={14}>
              <h1 className={SignUpstyles.step_heading}>Let's get started!</h1>
              <div className={SignUpstyles.step1_form}>
                <div className={SignUpstyles.input_label}>
                  What's your email?
                </div>
                <input
                  className={SignUpstyles.input}
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email ID"
                  disabled
                />

                <div className={SignUpstyles.input_label}>
                  What's your first name?
                </div>
                <input
                  className={SignUpstyles.input}
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleInputChange}
                  placeholder="First Name"
                />

                <div className={SignUpstyles.input_label}>
                  And, your last name?
                </div>
                <input
                  className={SignUpstyles.input}
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleInputChange}
                  placeholder="Last Name"
                />

                <div className={SignUpstyles.input_label}>
                  Enter an unique username!
                </div>
                <input
                  className={SignUpstyles.input}
                  name="username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  placeholder="Username"
                />
                <div className={SignUpstyles.input_label_comment}>
                  *Only lowercase letters, numbers and underscore allowed
                </div>
                <div
                  style={
                    this.state.username_error
                      ? { opacity: "1" }
                      : { opacity: "0" }
                  }
                  className={SignUpstyles.username_error}
                >
                  This username is not available, try another one.
                </div>
              </div>
              <div className={SignUpstyles.stepBtn} onClick={this.nextStep}>
                Next <Icon style={{ marginLeft: "10px" }} type="arrow-right" />
              </div>
              <div
                style={
                  this.state.step_error ? { opacity: "1" } : { opacity: "0" }
                }
                className={SignUpstyles.step_error}
              >
                Please fill up all the fields
              </div>
            </Col>
          </Row>
        </div>
      )
    } else if (this.state.step === 2) {
      return (
        <div className={SignUpstyles.step2_container}>
          <Row>
            <Col xs={24} lg={10} className={SignUpstyles.steps_content}>
              <h1>02</h1>
              <h2>/ 03</h2>

              <h3
                style={{ opacity: "0.8", color: "#029843" }}
                onClick={() => this.setState({ step: 1 })}
              >
                Basic Information
              </h3>
              <h3 style={{ opacity: "1" }}>About You</h3>
              <h3>Your Socials</h3>
            </Col>
            <Col xs={24} lg={14}>
              <h1 className={SignUpstyles.step_heading}>What do you do?</h1>

              <div className={SignUpstyles.input_label}>Title</div>
              <input
                className={SignUpstyles.input}
                name="bio"
                value={this.state.bio}
                onChange={this.handleInputChange}
                placeholder="Developer, Data Scientist, Teacher"
              />

              <div className={SignUpstyles.input_label}>About</div>
              <textarea
                className={SignUpstyles.input}
                name="about"
                value={this.state.about}
                onChange={this.handleInputChange}
                placeholder="A short bio of less than 120 characters"
              />

              <div className={SignUpstyles.input_label}>Skills</div>
              <div className={SignUpstyles.input_label_comment}>
                *Press enter to add a skill
              </div>
              <ReactTags
                tags={this.state.skills_array}
                placeholder={"Enter your Skills"}
                delimiters={[188, 13]}
                handleDelete={this.handleTagDelete}
                handleAddition={this.handleTagAddition}
                allowDragDrop={false}
                inputFieldPosition="top"
                autofocus={false}
              />

              <div className={SignUpstyles.stepBtn} onClick={this.nextStep}>
                Next <Icon style={{ marginLeft: "10px" }} type="arrow-right" />
              </div>
              <div
                style={
                  this.state.step_error ? { opacity: "1" } : { opacity: "0" }
                }
                className={SignUpstyles.step_error}
              >
                Please fill up all the fields
              </div>
            </Col>
          </Row>
        </div>
      )
    } else if (this.state.step === 3) {
      return (
        <div className={SignUpstyles.step3_container}>
          <Row>
            <Col xs={24} lg={10} className={SignUpstyles.steps_content}>
              <h1>03</h1>
              <h2>/ 03</h2>

              <h3
                style={{ opacity: "0.8", color: "#029843" }}
                onClick={() => this.setState({ step: 1 })}
              >
                Basic Information
              </h3>
              <h3
                style={{ opacity: "0.8", color: "#029843" }}
                onClick={() => this.setState({ step: 2 })}
              >
                About You
              </h3>
              <h3 style={{ opacity: "1" }}>Your Socials</h3>
            </Col>
            <Col xs={24} lg={14}>
              <h1 className={SignUpstyles.step_heading}>
                Where can others find you online?
              </h1>

              <h2 style={{ fontSize: "16px" }}>
                Please provide the full url. Leave it empty if you don't want to
                give.
              </h2>

              <div className={SignUpstyles.input_label}>Github</div>
              <input
                className={SignUpstyles.input}
                name="github"
                value={this.state.github}
                onChange={this.handleInputChange}
                placeholder="Github URL"
              />

              <div className={SignUpstyles.input_label}>Linkedin</div>
              <input
                className={SignUpstyles.input}
                name="linkedin"
                value={this.state.linkedin}
                onChange={this.handleInputChange}
                placeholder="Linkedin Profile URL"
              />

              <div className={SignUpstyles.input_label}>Facebook</div>
              <input
                className={SignUpstyles.input}
                name="facebook"
                value={this.state.facebook}
                onChange={this.handleInputChange}
                placeholder="Facebook Profile URL"
              />

              <div className={SignUpstyles.input_label}>Twitter</div>
              <input
                className={SignUpstyles.input}
                name="twitter"
                value={this.state.twitter}
                onChange={this.handleInputChange}
                placeholder="Twitter Profile URL"
              />
              {/* Skipped step-4 to reduce time in on-boarding the user - Abhi */}
              <div className={SignUpstyles.stepBtn} onClick={this.signup}>
                Finish{" "}
                <Icon style={{ marginLeft: "10px" }} type="arrow-right" />
              </div>
            </Col>
          </Row>
        </div>
      )
    } else if (this.state.step === 4) {
      return (
        <div className={SignUpstyles.preview_container}>
          <h1 className={SignUpstyles.preview_heading}>
            Do you want to continue?
          </h1>

          <div
            onClick={() => this.setState({ step: 1 })}
            className={SignUpstyles.preview_btn + " " + SignUpstyles.no_btn}
          >
            Nope. Let me review my details
          </div>
          <div
            onClick={this.signup}
            className={SignUpstyles.preview_btn + " " + SignUpstyles.yes_btn}
          >
            Yes! Sign me up
          </div>
        </div>
      )
    }
  }
}

export default signUp

export const CREATE_USER_MUTATION_APOLLO = gql`
  mutation createUser(
    $email: String!
    $id: uuid!
    $first_name: String!
    $last_name: String!
    $username: String!
    $profile_pic: String!
    $about: String!
    $bio: String!
    $skills: String!
    $github: String!
    $linkedin: String!
    $facebook: String!
    $twitter: String!
  ) {
    insert_Users(
      objects: {
        email: $email
        id: $id
        first_name: $first_name
        last_name: $last_name
        username: $username
        profile_pic: $profile_pic
        about: $about
        bio: $bio
        skills: $skills
        github: $github
        linkedin: $linkedin
        facebook: $facebook
        twitter: $twitter
      }
    ) {
      affected_rows
      returning {
        email
        id
        last_name
        first_name
        username
        profile_pic
      }
    }
  }
`

export const GET_ALL_USERNAMES_QUERY_APOLLO = gql`
  {
    Users {
      username
    }
  }
`
