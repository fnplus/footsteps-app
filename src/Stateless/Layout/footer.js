import React, { Component } from "react"
import { Row, Col } from "antd"

import Footerstyles from "../../styles/footer.module.css"

export class footer extends Component {
  render() {
    return (
      <footer className={Footerstyles.container}>
        <Row>
          <Col xs={24} lg={8}>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              className={Footerstyles.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://fnplus.tech"
            >
              Fnplus
            </a>
          </Col>
          <Col xs={24} lg={8} className={Footerstyles.footer_center}>
            <a
              className={Footerstyles.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://fnplus.tech/privacy-policy"
            >
              Privacy Policy
            </a>{" "}
            <a
              className={Footerstyles.link}
              target="_blank"
              rel="noopener noreferrer"
              href="https://fnplus.tech/terms-of-use"
            >
              Terms of Use
            </a>
          </Col>
          <Col xs={24} lg={8} className={Footerstyles.footer_right}>
            Check out this project on{" "}
            <a
              className={Footerstyles.link}
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
