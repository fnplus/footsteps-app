import React, { Component } from "react"
import { Row, Col, Icon } from "antd"
import firebase from "firebase"

import styles from "../styles/user.module.css"
import Footsteps from "./User/footsteps"
import Follow from "./User/follow"

export class user extends Component {
  state = {
    footsteps: true,
    followers: false,
    following: false,
  }

  changeView = title => {
    if (title === "footsteps") {
      this.setState({
        footsteps: true,
        followers: false,
        following: false,
      })
    } else if (title === "following") {
      this.setState({
        footsteps: false,
        followers: false,
        following: true,
      })
    } else if (title === "followers") {
      this.setState({
        footsteps: false,
        followers: true,
        following: false,
      })
    }
  }

  render() {
    const data = this.props.data

    return (
      <div className={styles.container}>
        <Row>
          <Col lg={8} className={styles.profile}>
            <div className={styles.profileContainer}>
              <img className={styles.avatar} src={data.profile_pic} alt="" />
              <div className={styles.userDetails}>
                <h2>
                  {data.first_name} {data.last_name}
                </h2>
                <h4>{data.username}</h4>
                <h4>{data.about}</h4>
              </div>

              <div className={styles.userInfo}>
                <Row>
                  <Col span={8}>
                    <div className={styles.count}>
                      {data.followers_aggregate.aggregate.count}
                    </div>
                    <div className={styles.text}>Followers</div>
                  </Col>
                  <Col span={8}>
                    <div className={styles.count}>
                      {data.following_aggregate.aggregate.count}
                    </div>
                    <div className={styles.text}>Following</div>
                  </Col>
                  <Col span={8}>
                    <div className={styles.count}>
                      {data.learning_paths_aggregate.aggregate.count}
                    </div>
                    <div className={styles.text}>Footsteps</div>
                  </Col>
                </Row>
              </div>

              <div className={styles.bio}>{data.bio}</div>

              <div className={styles.skills}>
                <h2>Skills</h2>
                {data.skills.split(",").map((skill, i) => {
                  return (
                    <div key={i} className={styles.skill}>
                      {skill}
                    </div>
                  )
                })}
              </div>

              <div className={styles.social}>
                <Row>
                  <Col span={8}>
                    <Icon
                      onClick={() => window.open(data.facebook)}
                      className={styles.icon}
                      type="facebook"
                      theme="filled"
                    />
                  </Col>
                  <Col span={8}>
                    <Icon
                      onClick={() => window.open(data.github)}
                      className={styles.icon}
                      type="github"
                      theme="filled"
                    />
                  </Col>
                  <Col span={8}>
                    <Icon
                      onClick={() => window.open(data.linkedin)}
                      className={styles.icon}
                      type="linkedin"
                      theme="filled"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={16}>
            <div className={styles.menu}>
              <Row>
                <Col
                  onClick={() => this.changeView("footsteps")}
                  xs={8}
                  lg={6}
                  className={
                    this.state.footsteps
                      ? styles.menuItem + " " + styles.active
                      : styles.menuItem
                  }
                >
                  Footsteps
                </Col>
                <Col
                  onClick={() => this.changeView("following")}
                  xs={8}
                  lg={6}
                  className={
                    this.state.following
                      ? styles.menuItem + " " + styles.active
                      : styles.menuItem
                  }
                >
                  Following
                </Col>
                <Col
                  onClick={() => this.changeView("followers")}
                  xs={8}
                  lg={6}
                  className={
                    this.state.followers
                      ? styles.menuItem + " " + styles.active
                      : styles.menuItem
                  }
                >
                  Followers
                </Col>
                <Col
                  lg={6}
                  onClick={() => {
                    firebase.auth().signOut()
                    window.location.href = "/"
                  }}
                >
                  logout
                </Col>
              </Row>
            </div>

            <div className={styles.content}>
              {this.state.footsteps ? (
                <Footsteps learning_paths={data.learning_paths} />
              ) : (
                ""
              )}
              {this.state.followers ? (
                <Follow users={data.followers} type={false} />
              ) : (
                ""
              )}
              {this.state.following ? (
                <Follow users={data.following} type={true} />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default user
