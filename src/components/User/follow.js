import React, { Component } from "react"
import { Col } from "antd"

import styles from "../../styles/user.module.css"

export class follow extends Component {
  render() {
    return (
      <div className={styles.followContainer}>
        {this.props.users.map(user => (
          <Col xs={12} lg={6} className={styles.userContainer}>
            <img className={styles.userImg} src={user.photo} alt="" />
            <h4 className={styles.userName}>
              {user.name + " " + user.surname}
            </h4>
          </Col>
        ))}
      </div>
    )
  }
}

export default follow
