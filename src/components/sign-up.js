import React, { Component } from "react"
import gql from "graphql-tag"
import uuid from "uuid"
import { Row, Col, Icon, Input } from "antd"

import firebase from "firebase/app"
import "firebase/auth"

import { client } from "../apollo/client"

import styles from "../styles/signUp.module.css"

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
    github: "",
    linkedin: "",
    facebook: "",
    registered_usernames: [],
    username_error: false,
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
        })
        this.setState({
          registered_usernames,
        })
      })
  }

  // componentDidMount() {
  //   client
  //     .mutate({
  //       mutation: CREATE_USER_MUTATION_APOLLO,
  //       variables: {
  //         email: firebase.auth().currentUser.email,
  //         id: uuid.v4(),
  //         first_name: firebase.auth().currentUser.displayName.split(" ")[0],
  //         last_name: firebase.auth().currentUser.displayName.split(" ")[1],
  //         username: firebase.auth().currentUser.email.split("@")[0],
  //         profile_pic: firebase.auth().currentUser.photoURL,
  //       },
  //     })
  //     .then(res => {
  //       console.log(res.data)
  //       this.props.updateUserId(res.data.insert_Users.returning[0].id, true)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       this.props.updateUserId("", false)
  //       firebase.auth().signOut()
  //     })
  // }

  handleInputChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value,
    })
  }

  handleUsernameChange = e => {
    let enteredUsername = e.target.value
    this.setState({
      username: enteredUsername,
    })

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
    this.setState({
      step: this.state.step + 1,
    })
  }

  render() {
    if (this.state.step === 0) {
      return (
        <div className={styles.step0_container}>
          <Row>
            <Col xs={24} lg={12}>
              <img
                className={styles.step0_img}
                src={require("../images/signup1.jpg")}
                alt=""
              />
            </Col>
            <Col xs={24} lg={12} className={styles.step0_content}>
              <h1>Hey {firebase.auth().currentUser.displayName}!</h1>
              <h2>Welcome to Fnplus Community!</h2>
              <h3>
                We are glad to have you on board. Let us get to know you better
                to enhance your experience with us.
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
        <div className={styles.step1_container}>
          <Row>
            <Col xs={24} lg={10} className={styles.steps_content}>
              <h1>01</h1>
              <h2>/ 03</h2>

              <h3 style={{ opacity: "1" }}>Basic Information</h3>
              <h3>About You</h3>
              <h3>Your Socials</h3>
            </Col>
            <Col xs={24} lg={14}>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                dicta!
              </h1>
              <div className={styles.step1_form}>
                <div className={styles.input_label}>Email</div>
                <input
                  className={styles.input}
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email ID"
                  disabled
                />

                <div className={styles.input_label}>First Name</div>
                <input
                  className={styles.input}
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleInputChange}
                  placeholder="First Name"
                />

                <div className={styles.input_label}>Last Name</div>
                <input
                  className={styles.input}
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleInputChange}
                  placeholder="Last Name"
                />

                <div className={styles.input_label}>Username</div>
                <input
                  className={styles.input}
                  name="username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  placeholder="Username"
                />
                <div
                  style={
                    this.state.username_error
                      ? { opacity: "1" }
                      : { opacity: "0" }
                  }
                  className={styles.username_error}
                >
                  This username is not available, try another one.
                </div>
              </div>
              <div className={styles.stepBtn}>
                Next <Icon style={{ marginLeft: "10px" }} type="arrow-right" />
              </div>
            </Col>
          </Row>
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
