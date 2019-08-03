import React from "react"
import { Router } from "@reach/router"

import PublicProfile from "../components/publicProfile"

export default () => (
  <Router>
    <PublicProfile path="/user/:username" />
  </Router>
)
