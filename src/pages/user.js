import React from "react"
import { Router } from "@reach/router"

import PublicProfile from "../components/publicProfile"

const User = () => (
  <Router>
    <PublicProfile path="/user/:username" />
  </Router>
)

export default User
