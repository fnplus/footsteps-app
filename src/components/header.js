import React, { Component } from "react"
import { Drawer, Button, Row, Col, Icon } from "antd"
import styles from "../styles/header.module.css"

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
          <Col xs={6} md={2} className={styles.logo}>
            <img src={require("../images/brand-logo.png")} alt="" />
          </Col>
          <Col xs={18} md={22}>
            <div className={styles.menuContainer}>
              <div className={styles.navDesktop}>
                <NavMenu
                  mode="horizontal"
                  show={this.props.show}
                  user={this.props.user}
                />
              </div>

              <Button className={styles.mobileToggle} onClick={this.showDrawer}>
                <Icon type="menu" />
              </Button>

              <Drawer
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={200}
              >
                <NavMenu
                  mode="vertical"
                  show={this.props.show}
                  user={this.props.user}
                  className={styles.navMobile}
                />
              </Drawer>
            </div>
          </Col>
        </Row>
      </nav>
    )
  }
}

export default header
