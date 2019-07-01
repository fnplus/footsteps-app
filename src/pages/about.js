import React, { Component } from "react"
import { Row, Col } from "antd"

import Layout from "../components/layout"
import styles from "../styles/about.module.css"

export class about extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <Row>
            <Col xs={24} md={12}>
              <h1>About Footsteps</h1>
              <p>
                let's you make your learning path and inspire others to follow
                them
              </p>
            </Col>
            <Col xs={24} md={12}>
              <img src={require("../images/version-control.svg")} alt="" />
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default about
