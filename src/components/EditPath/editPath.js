import React, { Component } from "react"
import gql from "graphql-tag"
import { navigate } from "gatsby"

import { CloseCircleOutlined } from "@ant-design/icons"
import { Row, Col, Popconfirm, Switch } from "antd"
import { v4 as uuidv4 } from "uuid"
import { WithContext as ReactTags } from "react-tag-input"
import FileUploader from "react-firebase-file-uploader"
import firebase from "firebase/app"
import "firebase/storage"

import addStyles from "../../styles/add.module.css"

import EditFootsteps from "./editFootstep"

import { client } from "../../apollo/client"

export class EditPath extends Component {
  state = {
    title: "",
    description: "",
    icon: "",
    icon_url: "",
    footsteps: [],
    id: "",
    err_msg: "",
    user_id: "",
    tags: "",
    tags_array: [],
    isUploading: false,
    progress: 0,
    path_id: 0,
    isPrivate: false,
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({
        user_id: localStorage.getItem("userId"),
        id: uuidv4(),
      })
    }

    const data = this.props.data
    let new_tags_array = []

    data.tags.split(",").map(tag => {
      let tag_obj = {
        id: tag,
        text: tag,
      }
      new_tags_array.push(tag_obj)

      return 0
    })

    this.setState({
      title: data.title,
      icon_url: data.icon,
      description: data.description,
      footsteps: data.footsteps,
      tags: data.tags,
      tags_array: new_tags_array,
      path_id: data.id,
      isPrivate: data.isPrivate,
    })
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

  // Handle Private Paths of User
  handlePrivatePath = val => {
    this.setState({ isPrivate: val })
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
        err_msg: "Please fill the Path Details",
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

  // Tag Handling Functions

  handleTagDelete = i => {
    const { tags_array } = this.state
    this.setState(
      {
        tags_array: tags_array.filter((_tag, index) => index !== i),
      },
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
          mutation: UPDATE_PATH_MUTATION_APOLLO,
          variables: {
            id: this.state.path_id,
            icon: this.state.icon_url,
            title: this.state.title,
            description: this.state.description,
            tags: this.state.tags,
            isPrivate: this.state.isPrivate,
          },
        })
        .then(res => {
          let path_id = res.data.update_Learning_Paths.returning[0].id

          let { footsteps } = this.state

          footsteps.forEach(footstep => {
            delete footstep.id
            delete footstep.__typename
            footstep.learning_path = path_id
          })

          client
            .mutate({
              mutation: DELETE_FOOTSTEPS_MUTATION_APOLLO,
              variables: {
                path_id,
              },
            })
            .then(res => {
              client.mutate({
                mutation: ADD_FOOTSTEPS_MUTATION_APOLLO,
                variables: {
                  data: footsteps,
                },
              })

              alert(`Successfully Edited path '${this.state.title}'`)
              navigate("/")
            })
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

  deletePath = () => {
    client
      .mutate({
        mutation: DELETE_FOOTSTEPS_MUTATION_APOLLO,
        variables: {
          path_id: this.state.path_id,
        },
      })
      .then(res => {
        client
          .mutate({
            mutation: DELETE_PATH_MUTATION_APOLLO,
            variables: {
              path_id: this.state.path_id,
            },
          })
          .then(res => {
            alert(`Successfully Deleted Path ${this.state.title}`)
            navigate("/")
          })
      })
  }

  render() {
    return (
      <div className={addStyles.container}>
        <h1 className={addStyles.heading}>Edit '{this.props.data.title}'</h1>

        <Popconfirm
          title={`Are you sure you want to delete ${this.state.title}?`}
          okText="Yes"
          cancelText="No"
          onConfirm={this.deletePath}
        >
          <div className={addStyles.deletePath}>
            <CloseCircleOutlined /> Delete Path
          </div>
        </Popconfirm>
        <div className={addStyles.checkbox_input}>
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
            <div className={addStyles.input_label}>Title</div>
            <input
              className={addStyles.input}
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Intro to Gatsby"
            />

            <div className={addStyles.input_label}>Description</div>
            <textarea
              className={addStyles.input}
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Gatsby is a free and open source framework based on React"
              style={{ height: "100px" }}
            />

            <div className={addStyles.input_label}>Tags</div>
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
            <div className={addStyles.icon_container}>
              {this.state.icon_url && (
                <img src={this.state.icon_url} alt="icon" />
              )}
            </div>

            <div
              // className={addStyles.icon_input_container}
              style={{ marginTop: "35px" }}
            >
              <Row>
                <Col xs={24} lg={14}>
                  <div
                    className={addStyles.input_label}
                    style={{ marginTop: "0" }}
                  >
                    Icon URL
                  </div>
                  <input
                    style={{ width: "100%" }}
                    className={addStyles.input}
                    name="icon"
                    value={this.state.icon_url}
                    onChange={this.handleInputChange}
                    placeholder="Icon URL"
                  />
                </Col>

                <Col xs={24} lg={10}>
                  <label className={addStyles.add_image_btn}>
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

        <div className={addStyles.footsteps_container}>
          <h1 className={addStyles.footsteps_heading}>Footsteps</h1>

          {this.state.footsteps.map((footstep, i) => {
            return (
              <div key={i}>
                <EditFootsteps
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
            <div className={addStyles.footsteps_new_container}>
              <div
                className={addStyles.footsteps_new}
                onClick={this.addNewFootstep}
              >
                Add new Footstep
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={addStyles.error_message}>{this.state.err_msg}</div>

        <div className={addStyles.path_submit_container}>
          <div className={addStyles.path_submit} onClick={this.submitPath}>
            Save Path
          </div>
        </div>
      </div>
    )
  }
}

export default EditPath

export const UPDATE_PATH_MUTATION_APOLLO = gql`
  mutation update_path(
    $id: Int!
    $description: String!
    $icon: String!
    $tags: String!
    $title: String!
    $isPrivate: Boolean!
  ) {
    update_Learning_Paths(
      where: { id: { _eq: $id } }
      _set: {
        description: $description
        icon: $icon
        tags: $tags
        title: $title
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

export const DELETE_FOOTSTEPS_MUTATION_APOLLO = gql`
  mutation delete_footsteps($path_id: Int!) {
    delete_Footsteps(where: { learning_path: { _eq: $path_id } }) {
      affected_rows
    }
  }
`

export const DELETE_PATH_MUTATION_APOLLO = gql`
  mutation delete_path($path_id: Int!) {
    delete_Learning_Paths(where: { id: { _eq: $path_id } }) {
      affected_rows
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
