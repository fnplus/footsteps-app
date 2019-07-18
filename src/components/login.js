import React, { Component } from "react"
import firebase from "firebase"

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => true,
  },
}

export class login extends Component {
  render() {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    )
  }
}

export default login
