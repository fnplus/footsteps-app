import React from "react"
import { Col } from "antd"

import Userstyles from "../../rstyles/user.module.css"
import { Link } from "gatsby"

export default ({ users, type }) => {
  if (users.length === 0)
    return (
      <div className={Userstyles.followContainer}>
        <h3>Nothing to show here</h3>
      </div>
    )
  let users_info_list = users.map(user =>
    type ? user.follower_info : user.follow_info
  )
  return (
    <div className={Userstyles.followContainer}>
      {users_info_list.map(user => (
        <Col xs={12} lg={6} className={Userstyles.userContainer} key={user.id}>
          <img className={Userstyles.userImg} src={user.profile_pic} alt="" />
          <Link to={`/user/${user.username}`}>
            <h4 className={Userstyles.userName}>
              {user.first_name + " " + user.last_name}
            </h4>
          </Link>
        </Col>
      ))}
    </div>
  )
}
