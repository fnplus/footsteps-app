import React, { useState, useContext } from "react"
import { Row, Col, Icon } from "antd"
import { Link, navigate } from "gatsby"

import styles from "../../styles/menu.module.css"
import UserContext from "../../context/userContext"
import { auth } from "../../firebase/firebase"

function NavMenu() {
  const [expand, setExpand] = useState(false)
  const { user } = useContext(UserContext)

  function toggleExpandMenu() {
    setExpand(expand => !expand)
  }

  function profileClick() {
    toggleExpandMenu()
    navigate("/profile/")
  }

  function logoutClick() {
    auth.signOut()
    toggleExpandMenu()
    navigate("/")
  }

  return (
    <Row>
      <ul>
        <li className={styles.menuProfile}>
          <img
            className={styles.menuProfileImg}
            src={user.profile_pic}
            alt=""
            onClick={toggleExpandMenu}
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
                  <Icon type="setting" theme="filled"></Icon>
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
