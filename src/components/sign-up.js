import React, { Component } from "react"
import gql from "graphql-tag"
import uuid from "uuid"

import firebase from "firebase/app"
import "firebase/auth"

import { client } from "../apollo/client"

export class signUp extends Component {
  componentDidMount() {
    client
      .mutate({
        mutation: CREATE_USER_MUTATION_APOLLO,
        variables: {
          email: firebase.auth().currentUser.email,
          id: uuid.v4(),
          first_name: firebase.auth().currentUser.displayName.split(" ")[0],
          last_name: firebase.auth().currentUser.displayName.split(" ")[1],
          username: firebase.auth().currentUser.email.split("@")[0],
          profile_pic: firebase.auth().currentUser.photoURL,
        },
      })
      .then(res => {
        console.log(res.data)
        this.props.updateUserId(res.data.insert_Users.returning[0].id, true)
      })
      .catch(err => {
        console.log(err)
        this.props.updateUserId("", false)
        firebase.auth().signOut()
      })
  }

  render() {
    return <div></div>
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
