import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import styles from "../styles/user.module.css"
import LearningPaths from "./User/learningPaths"
import Follow from "./User/follow"

export class user extends Component {
  state = {
    footsteps: true,
    followers: false,
    following: false,
  }

  componentDidMount() {
    console.log(this.props.user)
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
        <div className={styles.profileContainer}>
          <div className={styles.profileDetail}>
            <img className={styles.profileImg} src={data.profile_pic} alt="" />
            <div className={styles.profileInfo}>
              <h1>
                {data.first_name} {data.last_name}
              </h1>
              <h2>{data.username}</h2>
              <h3>{data.about}</h3>
            </div>
          </div>
        </div>

        <Row>
          <Col span={24}>
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
              </Row>
            </div>

            <div className={styles.content}>
              {this.state.footsteps ? (
                <LearningPaths learning_paths={data.learning_paths} />
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
