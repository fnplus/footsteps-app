import React, { Component } from "react"
import { Helmet } from "react-helmet"
import firebase from "firebase"

// eslint-disable-next-line
import styles from "../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./header"
import Footer from "./footer"
import Login from "./login"

export class layout extends Component {
  state = {
    // isSignedIn: false, // Local signed-in state.
    user: null,
  }

  componentDidMount() {
    console.log(this.state.user)
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user })
      console.log("logged in!")
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <div>
        {this.state.user === null ? (
          <Login />
        ) : (
          <div>
            <Helmet>
              <meta
                name="Description"
                content="let's you make your learning path and inspire others to follow them."
              />
              <title>FootSteps</title>
            </Helmet>
            <div className={styles.content}>
              <Header />
              <main>{this.props.children}</main>
            </div>
            <Footer />
          </div>
        )}
      </div>
    )
  }
}

export default layout
