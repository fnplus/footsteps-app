import React, { Component } from "react"
import { Router } from "@reach/router"

import EditPath from "../components/EditPath"

export class editPath extends Component {
  render() {
    return (
      <Router>
        <EditPath path="/editPath/:pathId" />
      </Router>
    )
  }
}

export default editPath
