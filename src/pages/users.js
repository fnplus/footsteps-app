import React from "react"
import { Router } from "@reach/router"
import { User_profile } from "./profile"
export default () => (
  <Router>
    <User_profile path="/users/:userId" />
  </Router>
)
