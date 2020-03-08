import React, { Component } from "react"
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons"
import { Row, Col } from "antd"

import styles from "../../styles/user.module.css"
import LearningPaths from "./learningPaths"

import UserContext from "../../context/userContext"

export class user extends Component {
  static contextType = UserContext

  render() {
    const data = this.context.user

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
              <Row className={styles.social_row}>
                {data.github !== "" &&
                data.github !== null &&
                data.github !== "https://github.com/" ? (
                  <Col span={6}>
                    <GithubFilled
                      onClick={() => window.open(data.github)}
                      className={styles.icon}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.linkedin !== "" &&
                data.linkedin !== null &&
                data.linkedin !== "https://linkedin.com/" ? (
                  <Col span={6}>
                    <LinkedinFilled
                      onClick={() => window.open(data.linkedin)}
                      className={styles.icon}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.twitter !== "" &&
                data.twitter !== null &&
                data.twitter !== "https://twitter.com/" ? (
                  <Col span={6}>
                    <TwitterOutlined
                      onClick={() => window.open(data.twitter)}
                      className={styles.icon}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.facebook !== "" &&
                data.facebook !== null &&
                data.facebook !== "https://facebook.com/" ? (
                  <Col span={6}>
                    <FacebookFilled
                      onClick={() => window.open(data.facebook)}
                      className={styles.icon}
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
                  <span className={styles.text}>Learning Paths</span>
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
                  <div className={styles.text}>Learning Paths</div>
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
              <Row className={styles.social_row}>
                {data.github !== "" &&
                data.github !== null &&
                data.github !== "https://github.com/" ? (
                  <Col span={6}>
                    <GithubFilled
                      onClick={() => window.open(data.github)}
                      className={styles.icon}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.linkedin !== "" &&
                data.linkedin !== null &&
                data.linkedin !== "https://linkedin.com/" ? (
                  <Col span={6}>
                    <LinkedinFilled
                      onClick={() => window.open(data.linkedin)}
                      className={styles.icon}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.twitter !== "" &&
                data.twitter !== null &&
                data.twitter !== "https://twitter.com/" ? (
                  <Col span={6}>
                    <TwitterOutlined
                      onClick={() => window.open(data.twitter)}
                      className={styles.icon}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.facebook !== "" &&
                data.facebook !== null &&
                data.facebook !== "https://facebook.com/" ? (
                  <Col span={6}>
                    <FacebookFilled
                      onClick={() => window.open(data.facebook)}
                      className={styles.icon}
                    />
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </div>
          </div>
        </div>

        <Row className={styles.menuContainer}>
          <Col span={24}>
            <div className={styles.content}>
              <LearningPaths
                learning_paths={data.learning_paths}
                user_id={data.id}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default user
