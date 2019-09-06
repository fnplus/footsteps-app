import React, { Component } from "react"
import { Row, Col } from "antd"

import styles from "./styles.module.css"

export class settings extends Component {
  state = {
    first_name: "",
    last_name: "",
    about: "",
    bio: "",
    email: "",
    facebook: "",
    github: "",
    linkedin: "",
    profile_pic: "",
    skills: "",
    skills_array: [],
    username: "",
  }

  componentDidMount() {
    let data = this.props.data

    let skills_array = []

    data.skills.split(",").map(skill => {
      let skill_obj = {
        id: skill,
        text: skill,
      }

      skills_array.push(skill_obj)

      return 0
    })

    this.setState({
      first_name: data.first_name,
      last_name: data.last_name,
      about: data.about,
      bio: data.bio,
      username: data.username,
      email: data.email,
      facebook: data.facebook,
      github: data.github,
      linkedin: data.linkedin,
      skills: data.skills,
      profile_pic: data.profile_pic,
      skills_array,
    })
  }

  handleInputChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value,
    })
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
        </Row>
      </div>
    )
  }
}

export default settings
