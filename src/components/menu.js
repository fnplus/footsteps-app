import React, { Component } from "react"
import { Row, Col, Icon } from "antd"
import { Link, navigate } from "gatsby"
import firebase from "firebase/app"
import "firebase/auth"

import styles from "../styles/menu.module.css"

class NavMenu extends Component {
  state = {
    expand: false,
  }

  expandMenu = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  profileClick = () => {
    navigate("/profile/")
    this.setState({
      expand: !this.state.expand,
    })
  }

  logoutClick = () => {
    firebase.auth().signOut()
    this.setState({
      expand: !this.state.expand,
    })
    navigate("/")
  }

  render() {
    return (
      <Row>
        <ul className={styles.menuContainer}>
          <li className={styles.menuProfile}>
            <img
              className={styles.menuProfileImg}
              src={this.props.user.profile_pic}
              alt=""
              onClick={this.expandMenu}
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
            this.state.expand
              ? styles.dropDown + " " + styles.dropDownShow
              : styles.dropDown
          }
        >
          <Row className={styles.dropDownInfo}>
            <Col span={6}>
              <img src={this.props.user.profile_pic} alt="" />
            </Col>
            <Col span={18}>
              <h3>
                {this.props.user.first_name} {this.props.user.last_name}
              </h3>
              <h5>{this.props.user.email}</h5>
              <Row>
                <Col span={10}>
                  <div
                    className={styles.profileBtn}
                    onClick={this.profileClick}
                  >
                    My Profile
                  </div>
                </Col>
                <Col span={14}>
                  <div className={styles.settingsBtn}>
                    <Icon type="setting" theme="filled"></Icon>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className={styles.logoutBtn} onClick={this.logoutClick}>
            Logout
          </div>
        </div>
      </Row>
    )
  }
}

export default NavMenu
