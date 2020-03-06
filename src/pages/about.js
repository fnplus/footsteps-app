import React, { Component } from "react"
import { Row, Col } from "antd"

import Layout from "../Statefull/Layout/layout"
import Aboutstyles from "../styles/about.module.css"

export class about extends Component {
  render() {
    return (
      <Layout>
        <div className={Aboutstyles.container}>
          <Row>
            <Col xs={24} md={12}>
              <h1>About Footsteps</h1>
              <p>
                Every expert was a beginner once. They tried and tested things
                and didn't give up. You can learn a lot from their learnings.
                Join footsteps to learn from experts and not make the same
                mistakes as they did.
              </p>
            </Col>
            <Col xs={24} md={12}>
              <img
                src={require("../images/versionControl.svg")}
                alt="Customised learning paths"
              />
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default about
