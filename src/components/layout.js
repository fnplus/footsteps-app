import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { navigate } from "gatsby"
import gql from "graphql-tag"
import firebase from "firebase/app"
import "firebase/auth"

import styles from "../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./header"
import Footer from "./footer"
import Login from "./login"
import Loader from "./loader"

import { client } from "../apollo/client"

export class layout extends Component {
  state = {
    isSignedIn: null,
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // this.setState({ isSignedIn: true })
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
              navigate("/sign-up")
            } else {
              console.log("User Registered")
              this.setState({ isSignedIn: true })
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

  render() {
    if (this.state.isSignedIn === null) {
      return <Loader />
    } else if (this.state.isSignedIn === false) {
      return (
        <div>
          <div className={styles.content}>
            <Header />
            <Login />
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
            <title>FootSteps</title>firebase"
          </Helmet>
          <div className={styles.content}>
            <Header />
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
    }
  }
`
