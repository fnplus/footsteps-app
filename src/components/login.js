import React from "react"
import loginStyles from "./login.module.css"
export default () => (
  <form>
    <h1>Join Us!</h1>
    <input
      type="text"
      name="Username"
      placeholder="Username"
      aria-label="Username"
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      aria-label="Password"
      required
    />
    <input type="Submit" value="Login" className="button" />
  </form>
)
