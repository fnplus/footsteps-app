import React, { Component } from "react"
import { Row, Col } from "antd"
import firebase from "firebase/app"
import "firebase/auth"

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import styles from "../../styles/login.module.css"

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Ignore signInSuccessUrl
    signInSuccessWithAuthResult: () => false,
  },
}
export class login extends Component {
  render() {
    return (
      <div>
        <Row>
          <h1 className={styles.heading}>Welcome to Footsteps</h1>
          <h2 className={styles.heading}>
            Search 🔎 community-made 🧑‍🤝‍🧑learning paths here!
          </h2>
        </Row>
        <Row>
          <Col xs={24} lg={14}>
            <img
              className={styles.image}
              src={require("../../images/signIn.png")}
              alt="Website is under construction"
            />
          </Col>
          <Col xs={24} lg={10}>
            <div className={styles.container}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default login
