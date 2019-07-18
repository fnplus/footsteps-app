import React, { Component } from "react"
import firebase from "firebase"

import Layout from "../components/layout"
import Landing from "../components/landing"

import firebaseConfig from "../firebase/config"

firebase.initializeApp(firebaseConfig)

export class index extends Component {
  render() {
    return (
      <Layout>
        <Landing />
      </Layout>
    )
  }
}

export default index
