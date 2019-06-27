import React from "react"
import Layout from "../components/layout"
import versionControl from "../images/version-control.svg"
export default () => (
  <Layout>
    <div className="container row">
      <section>
        <h1>About Footsteps</h1>
        <p>
          let's you make your learning path and inspire others to follow them
        </p>
      </section>
      <img src={versionControl} width="300px" height="300px" />
    </div>
  </Layout>
)
