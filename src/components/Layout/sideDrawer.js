import React, { useState } from "react"
import { Drawer, Row, Col } from "antd"
import { navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

import styles from "../../styles/header.module.css"

import NavMenu from "./menu"
export function header({ show = false }) {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(visible => !visible)
  }

  const onClose = () => {
    setVisible(false)
  }

  const logoutClick = () => {
    firebase.auth().signOut()
    navigate("/")
  }

  return (
    <nav className={styles.navContainer}>
      <Row>
        <Col xs={6} md={2} className={styles.logo}>
          <img
            src={require("../../images/brandLogo.png")}
            alt=""
            onClick={() => navigate("/")}
          />
        </Col>

        {show ? (
          <Col xs={18} md={22}>
            <div className={styles.menuContainer}>
              <div className={styles.navDesktop}>
                <NavMenu mode="horizontal" />
              </div>

              <div className={styles.mobile_toggle} onClick={showDrawer}>
                <img src={require("../../images/menu.png")} alt="Menu" />
              </div>

              <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
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
                  onClick={() => navigate("/settings/")}
                >
                  Settings
                </div>
                <div
                  className={styles.navItem}
                  onClick={logoutClick}
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

export default header
