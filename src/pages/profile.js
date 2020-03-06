import React, { Component } from "react"
import Layout from "../Statefull/Layout/layout"
import User from "../Stateless/User/index"

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
