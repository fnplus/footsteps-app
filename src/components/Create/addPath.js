import React, { Component } from "react"
import gql from "graphql-tag"
import { Row, Col } from "antd"
import uuid from "uuid"

import styles from "../../styles/add.module.css"

import AddFootsteps from "./addFootstep"

import { client } from "../../apollo/client"

export class addPath extends Component {
  state = {
    title: "",
    description: "",
    icon: "https://image.flaticon.com/icons/svg/284/284471.svg",
    footsteps: [],
    id: "",
    err_msg: "",
  }

  componentDidMount() {
    this.setState({
      id: uuid.v4(),
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
      let new_footstep = { id: uuid.v4() }

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
    return this.state.footsteps.every(footstep => {
      let footstepKeys = Object.keys(footstep)

      if (footstepKeys.length <= 1) {
        return true
      } else {
        return false
      }
    })
  }

  emptyContent = () => {
    return this.state.footsteps.every(footstep => {
      for (var key in footstep) {
        if (footstep[key] === "") {
          return true
        }
      }
      return false
    })
  }

  validatePathDetails = () => {
    console.log(this.state)

    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.icon === ""
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

  submitPath = () => {
    console.log(this.validatePathDetails())
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Create a new Path</h1>
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
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.icon_container}>
              <img src={this.state.icon} alt="" />
            </div>

            <div className={styles.icon_input_container}>
              <div className={styles.input_label}>Icon URL</div>
              <input
                className={styles.input}
                name="icon"
                value={this.state.icon}
                onChange={this.handleInputChange}
                placeholder="Icon URL"
              />
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
  ) {
    insert_Learning_Paths(
      objects: {
        author: $author
        description: $description
        icon: $icon
        title: $title
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
