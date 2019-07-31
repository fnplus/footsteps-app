import React, { Component } from "react"
import gql from "graphql-tag"
import uuid from "uuid"
import { Row, Col, Icon } from "antd"

import firebase from "firebase/app"
import "firebase/auth"

import { client } from "../apollo/client"

import styles from "../styles/signUp.module.css"

export class signUp extends Component {
  state = {
    step: 0,
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
              <div>
                Get started{" "}
                <Icon style={{ marginLeft: "10px" }} type="arrow-right"></Icon>
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
