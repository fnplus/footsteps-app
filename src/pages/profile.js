import React, { Component } from "react"
import Layout from "../components/layout"
import User from "../components/User"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Loader from "../components/loader"

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
