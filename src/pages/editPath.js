import React, { Component } from "react"
import { Router } from "@reach/router"

import EditPath from "../Statefull/EditPath/editPath"

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
