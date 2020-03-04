import React, { Component } from "react"

import Layout from "../Statefull/Layout/layout"
import Settings from "../Settings"

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
