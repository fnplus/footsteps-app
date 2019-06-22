import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
export default () => (
  <header>
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about/"}>About</Link>
      <Link to={"/auth/"}>Auth</Link>
      <Link to={"/profile/"}>Profile</Link>
    </nav>
  </header>
)
