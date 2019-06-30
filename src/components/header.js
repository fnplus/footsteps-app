import React, { Component } from "react"
import { Drawer, Button, Row, Col } from "antd"
import styles from "./header.module.css"

import NavMenu from "./menu"
export class header extends Component {
  state = {
    visible: false,
  }

  showDrawer = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <nav className={styles.navContainer}>
        <Row>
          <Col span={2} className={styles.logo}>
            <img src={require("../images/brand-logo.png")} alt="" />
          </Col>
          <Col span={22}>
            <div className={styles.menuContainer}>
              <NavMenu mode="horizontal" />

              <Button
                className={styles.mobileToggle}
                type="primary"
                onClick={this.showDrawer}
              >
                <span className="barsBtn"></span>
              </Button>

              <Drawer
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <NavMenu mode="vertical" />
              </Drawer>
            </div>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default header
