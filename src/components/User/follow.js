import React from "react"
import { Col } from "antd"

import styles from "../../styles/user.module.css"

export default ({ users, type }) => {
  console.log(users)
  if (users.length === 0)
    return (
      <div className={styles.followContainer}>
        <h3>Nothing to show here</h3>
      </div>
    )
  let users_info_list = users.map(user =>
    type ? user.follower_info : user.following_info
  )
  console.log(users_info_list)
  return (
    <div className={styles.followContainer}>
      {users_info_list.map(user => (
        <Col xs={12} lg={6} className={styles.userContainer}>
          <img className={styles.userImg} src={user.profile_pic} alt="" />
          <h4 className={styles.userName}>
            {user.first_name + " " + user.last_name}
          </h4>
        </Col>
      ))}
    </div>
  )
}
