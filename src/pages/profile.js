import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import User from "../components/User"

export class profile extends Component {
  render() {
    return (
      <Layout>
        <User />
      </Layout>
    )
  }
}

export default profile
