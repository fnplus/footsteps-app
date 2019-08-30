import React, { Component } from "react"
import { Drawer, Row, Col } from "antd"
import { navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

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

  logoutClick = () => {
    firebase.auth().signOut()
    navigate("/")
  }

  render() {
    return (
      <nav className={styles.navContainer}>
        <Row>
          <Col xs={6} md={2} className={styles.logo}>
            <img
              src={require("../images/brand-logo.png")}
              alt=""
              onClick={() => navigate("/")}
            />
          </Col>

          {this.props.show ? (
            <Col xs={18} md={22}>
              <div className={styles.menuContainer}>
                <div className={styles.navDesktop}>
                  <NavMenu mode="horizontal" user={this.props.user} />
                </div>

                <div className={styles.mobile_toggle} onClick={this.showDrawer}>
                  <img src={require("../images/menu.png")} alt="Menu" />
                </div>

                <Drawer
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                  width={200}
                >
                  <div className={styles.navItem} onClick={() => navigate("/")}>
                    Home
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => navigate("/add/")}
                  >
                    Create Path
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={() => navigate("/profile/")}
                  >
                    Profile
                  </div>
                  <div
                    className={styles.navItem}
                    onClick={this.logoutClick}
                    style={{ color: "#fe5e44" }}
                  >
                    Logout
                  </div>
                </Drawer>
              </div>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </nav>
    )
  }
}

export default header
