import React, { useState } from "react"
import { Drawer, Row, Col } from "antd"
import { navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

import Headerstyles from "../../styles/header.module.css"

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
    <nav className={Headerstyles.navContainer}>
      <Row>
        <Col xs={6} md={2} className={Headerstyles.logo}>
          <img
            src={require("../../images/brandLogo.png")}
            alt=""
            onClick={() => navigate("/")}
          />
        </Col>

        {show ? (
          <Col xs={18} md={22}>
            <div className={Headerstyles.menuContainer}>
              <div className={Headerstyles.navDesktop}>
                <NavMenu mode="horizontal" />
              </div>

              <div className={Headerstyles.mobile_toggle} onClick={showDrawer}>
                <img src={require("../../images/menu.png")} alt="Menu" />
              </div>

              <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={200}
              >
                <div
                  className={Headerstyles.navItem}
                  onClick={() => navigate("/")}
                >
                  Home
                </div>
                <div
                  className={Headerstyles.navItem}
                  onClick={() => navigate("/add/")}
                >
                  Create Path
                </div>
                <div
                  className={Headerstyles.navItem}
                  onClick={() => navigate("/profile/")}
                >
                  Profile
                </div>
                <div
                  className={Headerstyles.navItem}
                  onClick={() => navigate("/settings/")}
                >
                  Settings
                </div>
                <div
                  className={Headerstyles.navItem}
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
