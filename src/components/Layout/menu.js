import React, { useState, useContext } from "react"
import { SettingFilled } from "@ant-design/icons"
import { Row, Col } from "antd"
import { Link, navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

import styles from "../../styles/menu.module.css"
import UserContext from "../../context/userContext"

function NavMenu() {
  const [expand, setExpand] = useState(false)
  const { user } = useContext(UserContext)

  const expandMenu = () => {
    setExpand(expand => !expand)
  }

  const profileClick = () => {
    navigate("/profile/")
    expandMenu()
  }

  const logoutClick = () => {
    firebase.auth().signOut()
    expandMenu()
    navigate("/")
  }

  return (
    <Row align="end">
      <ul>
        <li className={styles.menuProfile}>
          <img
            className={styles.menuProfileImg}
            src={user.profile_pic}
            alt=""
            onClick={expandMenu}
          />
        </li>

        <li className={styles.menuItems}>
          <Link to="/add/">Create Path</Link>
        </li>
        <li className={styles.menuItems}>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <div
        className={
          expand ? styles.dropDown + " " + styles.dropDownShow : styles.dropDown
        }
      >
        <Row className={styles.dropDownInfo}>
          <Col span={6}>
            <img src={user.profile_pic} alt="" />
          </Col>
          <Col span={18}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <h5>{user.email}</h5>
            <Row>
              <Col span={10}>
                <div className={styles.profileBtn} onClick={profileClick}>
                  My Profile
                </div>
              </Col>
              <Col span={14}>
                <div
                  className={styles.settingsBtn}
                  onClick={() => navigate("/settings/")}
                >
                  <SettingFilled></SettingFilled>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={styles.logoutBtn} onClick={logoutClick}>
          Logout
        </div>
      </div>
    </Row>
  )
}

export default NavMenu
