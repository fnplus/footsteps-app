import React from "react"
import loginStyles from "./login.module.css"
export default () => (
  <form>
    <input type="text" name="Username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <input type="Submit" value="Login" />
  </form>
)
