import React, { Component } from "react"
import { Helmet } from "react-helmet"
import firebase from "firebase/app"
import "firebase/auth"

import styles from "../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./header"
import Footer from "./footer"
import Login from "./login"
import Loader from "./loader"

export class layout extends Component {
  state = {
    isSignedIn: null,
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isSignedIn: true })
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
