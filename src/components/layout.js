import React, { Component } from "react"
import { Helmet } from "react-helmet"
import firebase from "firebase"
import { Loader } from "antd"

// eslint-disable-next-line
import styles from "../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./header"
import Footer from "./footer"
import Login from "./login"

export class layout extends Component {
  state = {
    isSignedIn: null,
  }

  componentDidMount() {
    console.log(this.state.user)
    if (this.state.user === null) {
      this.setState({
        isSignedIn: false,
      })
    }
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
      return <h1>Loading....</h1>
    } else if (this.state.isSignedIn === false) {
      return <Login />
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
