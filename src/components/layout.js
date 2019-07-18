import React, { Component } from "react"
import { Helmet } from "react-helmet"
import firebase from "firebase"

// eslint-disable-next-line
import styles from "../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./header"
import Footer from "./footer"
import Login from "./login"

// export default ({ children }) => (
//   <div>
//     <Helmet>
//       <meta
//         name="Description"
//         content="let's you make your learning path and inspire others to follow them."
//       />
//       <title>FootSteps</title>
//     </Helmet>
//     <div className={styles.content}>
//       <Header />
//       <main>{children}</main>
//     </div>
//     <Footer />
//   </div>
// )

export class layout extends Component {
  state = {
    isSignedIn: false, // Local signed-in state.
  }

  componentDidMount() {
    console.log(firebase.auth())
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("logged in!")
      console.log(firebase.auth())
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
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
        ) : (
          <Login />
        )}
      </div>
    )
  }
}

export default layout
