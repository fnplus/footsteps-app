import React, { Component } from "react"
import { Row, Col } from "antd"

import styles from "../styles/footer.module.css"

export class footer extends Component {
  render() {
    return (
      <footer className={styles.container}>
        <Row>
          <Col xs={24} lg={12}>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://fnplus.tech"
            >
              Fnplus
            </a>
          </Col>
          <Col xs={24} lg={12} className={styles.footer_right}>
            Check out this project on{" "}
            <a
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fnplus/footsteps-app"
            >
              Github
            </a>{" "}
          </Col>
        </Row>
      </footer>
    )
  }
}

export default footer
