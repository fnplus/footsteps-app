import React, { Component } from "react"

import Layout from "../components/Layout/layout"
import Settings from "../components/Settings"

export class settings extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Settings />
        </Layout>
      </div>
    )
  }
}

export default settings
