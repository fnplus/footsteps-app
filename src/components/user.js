import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import styles from "../styles/user.module.css"
import Footsteps from "./User/footsteps"
import Followers from "./User/followers"
import Following from "./User/following"

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
          <Col lg={8}>
            <img className={styles.avatar} src={data.profilePic} alt="" />
            <div className={styles.userDetails}>
              <h2>
                {data.firstName} {data.lastName}
              </h2>
              <h4>{data.username}</h4>
              <h4>{data.about}</h4>
            </div>

            <div className={styles.userInfo}>
              <Row>
                <Col span={8}>
                  <div className={styles.count}>{data.followers.length}</div>
                  <div className={styles.text}>Followers</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>{data.following.length}</div>
                  <div className={styles.text}>Following</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>
                    {data.learningPaths.length}
                  </div>
                  <div className={styles.text}>Footsteps</div>
                </Col>
              </Row>
            </div>

            <div className={styles.bio}>{data.bio}</div>

            <div className={styles.skills}>
              <h2>Skills</h2>
              {data.coreSkills.map((skill, i) => {
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
                    onClick={() => window.open(data.social.facebook)}
                    className={styles.icon}
                    type="facebook"
                  />
                </Col>
                <Col span={8}>
                  <Icon
                    onClick={() => window.open(data.social.github)}
                    className={styles.icon}
                    type="github"
                  />
                </Col>
                <Col span={8}>
                  <Icon
                    onClick={() => window.open(data.social.linkedin)}
                    className={styles.icon}
                    type="linkedin"
                  />
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={16}>
            <div className={styles.menu}>
              <Row>
                <Col
                  onClick={() => this.changeView("footsteps")}
                  span={6}
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
                  span={6}
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
                  span={6}
                  className={
                    this.state.followers
                      ? styles.menuItem + " " + styles.active
                      : styles.menuItem
                  }
                >
                  Followers
                </Col>
              </Row>
            </div>

            <div className={styles.content}>
              {this.state.footsteps ? (
                <Footsteps learningPaths={data.learningPaths} />
              ) : (
                ""
              )}
              {this.state.followers ? <Followers /> : ""}
              {this.state.following ? <Following /> : ""}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default user
