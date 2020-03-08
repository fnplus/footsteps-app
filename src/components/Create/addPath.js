import React, { Component } from "react"
import { navigate } from "gatsby"
import gql from "graphql-tag"

import { v4 as uuidv4 } from "uuid"
import { Row, Col, Switch } from "antd"
import { WithContext as ReactTags } from "react-tag-input"
import FileUploader from "react-firebase-file-uploader"
import firebase from "firebase/app"
import "firebase/storage"

import styles from "../../styles/add.module.css"

import AddFootsteps from "./addFootstep"

import { client } from "../../apollo/client"

export class addPath extends Component {
  state = {
    title: "",
    description: "",
    icon: "",
    icon_url: "https://image.flaticon.com/icons/svg/284/284471.svg",
    footsteps: [],
    id: "",
    err_msg: "",
    user_id: "",
    tags: "",
    tags_array: [],
    isUploading: false,
    progress: 0,
    isPrivate: false,
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({
        user_id: localStorage.getItem("userId"),
        id: uuidv4(),
      })
    }
  }

  handleInputChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value,
    })
  }

  addNewFootstep = () => {
    this.setState(state => {
      let new_footstep = { id: uuidv4() }

      return { footsteps: [...state.footsteps, new_footstep] }
    })
  }

  updateFootstepContent = newFootstep => {
    let { footsteps } = this.state

    let footstepToReplaceIndex = footsteps.findIndex(
      footstep => footstep.id === newFootstep.id
    )

    footsteps[footstepToReplaceIndex] = newFootstep

    this.setState({
      footsteps,
    })
  }

  removeNewFootstep = id => {
    let removed_footstep = this.state.footsteps.filter(
      footstep => footstep.id !== id
    )

    this.setState({
      footsteps: removed_footstep,
    })
  }

  // Footstep validation functions

  noContent = () => {
    let valid = false

    let { footsteps } = this.state

    for (var i = 0; i < footsteps.length; i++) {
      if (Object.keys(footsteps[i]).length <= 1) {
        valid = true
      }
    }

    return valid
  }

  emptyContent = () => {
    let valid = false

    let { footsteps } = this.state

    for (var i = 0; i < footsteps.length; i++) {
      let footstep = footsteps[i]

      for (var key in footstep) {
        if (key !== "description") {
          if (footstep[key] === "") {
            valid = true
          }
        }
      }
    }

    return valid
  }

  validatePathDetails = () => {
    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.icon_url === "" ||
      this.state.tags === ""
    ) {
      this.setState({
        err_msg: "Please fill the path details",
      })
      return false
    } else if (this.state.footsteps.length < 1) {
      this.setState({
        err_msg: "Please add a few footsteps. Footsteps can not be empty.",
      })
      return false
    } else if (this.noContent()) {
      this.setState({
        err_msg: "Please fill the footstep content",
      })
      return false
    } else if (this.emptyContent()) {
      this.setState({
        err_msg: "Please fill all the footstep fields",
      })
      return false
    } else {
      this.setState({
        err_msg: "",
      })
      return true
    }
  }

  // Handle Private Paths of User
  handlePrivatePath = val => {
    this.setState({ isPrivate: val })
  }

  // Tag Handling Functions
  handleTagDelete = i => {
    const { tags_array } = this.state
    this.setState({
      tags_array: tags_array.filter((_tag, index) => index !== i),
    })
  }

  handleTagAddition = tag => {
    if (this.state.tags_array.length < 10) {
      this.setState(
        state => ({ tags_array: [...state.tags_array, tag] }),
        () => {
          let tags = ""

          this.state.tags_array.map((skill, i) => {
            if (i !== this.state.tags_array.length - 1) {
              tags += skill.text + ","
              return 0
            } else {
              tags += skill.text
              return 0
            }
          })

          this.setState({
            tags,
          })
        }
      )
    }
  }

  submitPath = () => {
    if (this.validatePathDetails()) {
      client
        .mutate({
          mutation: CREATE_PATH_MUTATION_APOLLO,
          variables: {
            author: this.state.user_id,
            icon: this.state.icon_url,
            title: this.state.title,
            description: this.state.description,
            tags: this.state.tags,
            isPrivate: this.state.isPrivate,
          },
        })
        .then(res => {
          let path_id = res.data.insert_Learning_Paths.returning[0].id

          let { footsteps } = this.state

          footsteps.forEach(footstep => {
            delete footstep.id
            footstep.learning_path = path_id
          })

          client.mutate({
            mutation: ADD_FOOTSTEPS_MUTATION_APOLLO,
            variables: {
              data: footsteps,
            },
          })

          alert(`Successfully created path '${this.state.title}'`)
          navigate("/")
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
    this.setState({ icon: filename, progress: 100, isUploading: false })
    firebase
      .storage()
      .ref("Path")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ icon_url: url }))
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Create a new Path</h1>
        <div className={styles.checkbox_input}>
          <label>
            Private{"  "}
            <Switch
              style={this.state.isPrivate ? { backgroundColor: "green" } : {}}
              checked={this.state.isPrivate}
              onChange={this.handlePrivatePath}
            />
          </label>
        </div>
        <Row>
          <Col xs={24} lg={12}>
            <div className={styles.input_label}>Title</div>
            <input
              className={styles.input}
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Intro to Gatsby"
            />

            <div className={styles.input_label}>Description</div>
            <textarea
              className={styles.input}
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Gatsby is a free and open source framework based on React"
              style={{ height: "100px" }}
            />

            <div className={styles.input_label}>Tags</div>
            <ReactTags
              tags={this.state.tags_array}
              placeholder={"Enter relevant tags"}
              delimiters={[188, 13]}
              handleDelete={this.handleTagDelete}
              handleAddition={this.handleTagAddition}
              allowDragDrop={false}
              inputFieldPosition="top"
              autofocus={false}
            />
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.icon_container}>
              {this.state.icon_url && (
                <img src={this.state.icon_url} alt="icon" />
              )}
            </div>

            <div
              // className={styles.icon_input_container}
              style={{ marginTop: "35px" }}
            >
              <Row>
                <Col xs={24} lg={14}>
                  <div
                    className={styles.input_label}
                    style={{ marginTop: "0" }}
                  >
                    Icon URL
                  </div>
                  <input
                    style={{ width: "100%" }}
                    className={styles.input}
                    name="icon"
                    value={this.state.icon_url}
                    onChange={this.handleInputChange}
                    placeholder="Icon URL"
                  />
                </Col>

                <Col xs={24} lg={10}>
                  <label className={styles.add_image_btn}>
                    Upload Custom Icon
                    <FileUploader
                      hidden
                      accept="image/*"
                      name="icon"
                      randomizeFilename
                      storageRef={firebase.storage().ref("Path")}
                      onUploadStart={this.handleUploadStart}
                      onUploadError={this.handleUploadError}
                      onUploadSuccess={this.handleUploadSuccess}
                      onProgress={this.handleProgress}
                    />
                  </label>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className={styles.footsteps_container}>
          <h1 className={styles.footsteps_heading}>Footsteps</h1>

          {this.state.footsteps.map((footstep, i) => {
            return (
              <div key={footstep.id}>
                <AddFootsteps
                  index={i + 1}
                  pathId={this.state.id}
                  data={footstep}
                  remove={this.removeNewFootstep}
                  update={this.updateFootstepContent}
                />
              </div>
            )
          })}

          {this.state.footsteps.length < 10 ? (
            <div className={styles.footsteps_new_container}>
              <div
                className={styles.footsteps_new}
                onClick={this.addNewFootstep}
              >
                Add new Footstep
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={styles.error_message}>{this.state.err_msg}</div>

        <div className={styles.path_submit_container}>
          <div className={styles.path_submit} onClick={this.submitPath}>
            Create Path
          </div>
        </div>
      </div>
    )
  }
}

export default addPath

export const CREATE_PATH_MUTATION_APOLLO = gql`
  mutation insert_path(
    $author: uuid!
    $icon: String!
    $title: String!
    $description: String!
    $tags: String!
    $isPrivate: Boolean!
  ) {
    insert_Learning_Paths(
      objects: {
        author: $author
        description: $description
        icon: $icon
        title: $title
        tags: $tags
        isPrivate: $isPrivate
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export const ADD_FOOTSTEPS_MUTATION_APOLLO = gql`
  mutation insert_footstep($data: [Footsteps_insert_input!]!) {
    insert_Footsteps(objects: $data) {
      affected_rows
    }
  }
`
