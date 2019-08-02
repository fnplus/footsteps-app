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
        <div className={styles.profileContainer + " " + styles.desktopProfile}>
          <div className={styles.profileInfo}>
            <h1>
              {data.first_name} {data.last_name}
            </h1>
            <h2>{data.username}</h2>
            <h3>{data.bio}</h3>
          </div>
          <div className={styles.profileImgContainer}>
            <img className={styles.profileImg} src={data.profile_pic} alt="" />
            <div className={styles.social}>
              <Row>
                {data.github !== "" ? (
                  <Col span={8}>
                    <Icon
                      onClick={() => window.open(data.github)}
                      className={styles.icon}
                      type="github"
                      theme="filled"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.linkedin !== "" ? (
                  <Col span={8}>
                    <Icon
                      onClick={() => window.open(data.linkedin)}
                      className={styles.icon}
                      type="linkedin"
                      theme="filled"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.facebook !== "" ? (
                  <Col span={8}>
                    <Icon
                      onClick={() => window.open(data.facebook)}
                      className={styles.icon}
                      type="facebook"
                      theme="filled"
                    />
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </div>
          </div>
          <div className={styles.profileDetail}>
            <div className={styles.profileAbout}>
              <h1>About</h1>
              <p className={styles.bioContent}>{data.about}</p>
              {data.skills !== null ? (
                <div className={styles.skills}>
                  <h1>Skills</h1>
                  {data.skills.split(",").map((skill, i) => {
                    return (
                      <div key={i} className={styles.skill}>
                        {skill}
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <Row className={styles.userInfo}>
              <Col span={8}>
                <div className={styles.count}>
                  {data.learning_paths_aggregate.aggregate.count}
                  <span className={styles.text}>Footsteps</span>
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.count}>
                  {data.followers_aggregate.aggregate.count}
                  <span className={styles.text}>Followers</span>
                </div>
              </Col>
              <Col span={8}>
                <div className={styles.count}>
                  {data.following_aggregate.aggregate.count}
                  <span className={styles.text}>Following</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.mobileProfile}>
          <div className={styles.profileContainer}>
            <img className={styles.avatar} src={data.profile_pic} alt="" />
            <div className={styles.userDetails}>
              <h2>
                {data.first_name} {data.last_name}
              </h2>
              <h4>{data.username}</h4>
              <h4>{data.bio}</h4>
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

            <div className={styles.bio}>{data.about}</div>

            {data.skills !== null ? (
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
            ) : (
              <div></div>
            )}

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
        </div>

        <Row className={styles.menuContainer}>
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
