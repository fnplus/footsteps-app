import React from "react"
import Layout from "../components/layout"
export default () => (
  <Layout>
    <h1>Authenticate!</h1>
    <form>
      <input type="text" name="Username" />
      <input type="password" name="password" />
      <input type="Submit" value="Login" />
    </form>
  </Layout>
)
