import React, { Component } from "react"

import Layout from "../Statefull/Layout/layout"
import Landing from "../Stateless/Landing/index"

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
