import React from "react"
import { Router } from "@reach/router"

import EditPath from "../components/EditPath/EditPath"

export default () => (
  <Router>
    <EditPath path="/editPath/:pathId" />
  </Router>
)
