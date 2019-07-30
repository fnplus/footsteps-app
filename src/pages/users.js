import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "./profile"
export default () => (
  <Router>
    <Profile path="/users/:userId" />
  </Router>
)
