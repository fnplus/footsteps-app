import React, { Component } from "react"
import { Helmet } from "react-helmet"
import gql from "graphql-tag"
import firebase from "firebase/app"
import "firebase/auth"

import styles from "../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./header"
import Footer from "./footer"
import Login from "./login"
import Loader from "./loader"
import SignUp from "./sign-up"

import { client } from "../apollo/client"

export class layout extends Component {
  state = {
    isSignedIn: null,
    userId: "",
    user: {},
    signUp: false,
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        client
          .query({
            query: USER_EMAIL_QUERY_APOLLO,
            variables: {
              email: firebase.auth().currentUser.email,
            },
          })
          .then(response => {
            if (response.data.Users.length === 0) {
              console.log("User not registered")
              this.setState({ isSignedIn: false, signUp: true })
            } else {
              console.log("User Registered", response.data)
              this.setState({
                isSignedIn: true,
                userId: response.data.Users[0].id,
                user: response.data.Users[0],
              })
              localStorage.setItem("userId", response.data.Users[0].id)
            }
          })
      } else {
        this.setState({ isSignedIn: false })
      }
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  updateUserId = (userId, isSignedIn) => {
    this.setState({ userId: userId, isSignedIn: isSignedIn })
    localStorage.setItem("userId", userId)
  }

  render() {
    if (this.state.isSignedIn === null) {
      return (
        <div>
          <div className={styles.content}>
            <Header show={false} user={this.state.user} />
            <Loader />
          </div>
          <Footer />
        </div>
      )
    } else if (this.state.isSignedIn === false) {
      return (
        <div>
          <div className={styles.content}>
            <Header show={false} user={this.state.user} />
            {!this.state.signUp ? (
              <Login />
            ) : (
              <SignUp updateUserId={this.updateUserId} />
            )}
          </div>
          <Footer />
        </div>
      )
    } else if (this.state.isSignedIn === true) {
      return (
        <div>
          <Helmet>
            <meta
              name="Description"
              content="let's you make your learning path and inspire others to follow them."
            />
            <title>FootSteps</title>
          </Helmet>
          <div className={styles.content}>
            <Header show={true} user={this.state.user} />
            <main>{this.props.children}</main>
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default layout

export const USER_EMAIL_QUERY_APOLLO = gql`
  query getUser($email: String!) {
    Users(where: { email: { _like: $email } }) {
      first_name
      last_name
      email
      id
      profile_pic
    }
  }
`
