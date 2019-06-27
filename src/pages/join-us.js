import React from "react"
import Layout from "../components/layout"
import Login from "../components/login"
import voiceInterface from "../images/voice-interface.svg"
export default () => (
  <Layout>
    <div className="container row">
      <Login />
      <img src={voiceInterface} width="300px" height="300px" />
    </div>
  </Layout>
)
