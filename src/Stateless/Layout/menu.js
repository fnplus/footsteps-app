import React, { useState, useContext } from "react"
import { Row, Col, Icon } from "antd"
import { Link, navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

import Menustyles from "../../styles/menu.module.css"
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
    <Row>
      <ul>
        <li className={Menustyles.menuProfile}>
          <img
            className={Menustyles.menuProfileImg}
            src={user.profile_pic}
            alt=""
            onClick={expandMenu}
          />
        </li>

        <li className={Menustyles.menuItems}>
          <Link to="/add/">Create Path</Link>
        </li>
        <li className={Menustyles.menuItems}>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <div
        className={
          expand
            ? Menustyles.dropDown + " " + Menustyles.dropDownShow
            : Menustyles.dropDown
        }
      >
        <Row className={Menustyles.dropDownInfo}>
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
                <div className={Menustyles.profileBtn} onClick={profileClick}>
                  My Profile
                </div>
              </Col>
              <Col span={14}>
                <div
                  className={Menustyles.settingsBtn}
                  onClick={() => navigate("/settings/")}
                >
                  <Icon type="setting" theme="filled"></Icon>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={Menustyles.logoutBtn} onClick={logoutClick}>
          Logout
        </div>
      </div>
    </Row>
  )
}

export default NavMenu
