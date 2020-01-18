import React from "react"
import { Link } from "gatsby"

const NotFound = () => (
  <h1 className="absolute-center">
    You're looking for something that doesn't exist!
    <Link to="/">Go Back</Link>
  </h1>
)

export default NotFound
