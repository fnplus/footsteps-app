import React, { Component } from "react"
import { Menu } from "antd"
import { Link } from "gatsby"

import styles from "./menu.module.css"

const { Item } = Menu

class NavMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode={this.props.mode} style={{ float: "right", border: "none" }}>
          <Item className={styles.menuItems}>
            <Link to="/">Home</Link>
          </Item>
          <Item className={styles.menuItems}>
            <Link to="/about/">About</Link>
          </Item>
          <Item className={styles.menuItems}>
            <Link to="/profile/">Profile</Link>
          </Item>
          <Item className={styles.menuItems}>
            <Link to="/join-us/">Join Us</Link>
          </Item>
          <Item className={styles.menuItems + " " + styles.menuBtn}>
            <Link to="/">Get Started</Link>
          </Item>
        </Menu>
      </div>
    )
  }
}

export default NavMenu
