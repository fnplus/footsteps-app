import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import Userstyles from "../../styles/user.module.css"
import LearningPaths from "../../Statefull/User/learningPaths"

import UserContext from "../../context/userContext"

export class user extends Component {
  static contextType = UserContext

  render() {
    const data = this.context.user

    return (
      <div className={Userstyles.container}>
        <div
          className={
            Userstyles.profileContainer + " " + Userstyles.desktopProfile
          }
        >
          <div className={Userstyles.profileInfo}>
            <h1>
              {data.first_name} {data.last_name}
            </h1>
            <h2>{data.username}</h2>
            <h3>{data.bio}</h3>
          </div>
          <div className={Userstyles.profileImgContainer}>
            <img
              className={Userstyles.profileImg}
              src={data.profile_pic}
              alt=""
            />
            <div className={Userstyles.social}>
              <Row className={Userstyles.social_row}>
                {data.github !== "" &&
                data.github !== null &&
                data.github !== "https://github.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.github)}
                      className={Userstyles.icon}
                      type="github"
                      theme="filled"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.linkedin !== "" &&
                data.linkedin !== null &&
                data.linkedin !== "https://linkedin.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.linkedin)}
                      className={Userstyles.icon}
                      type="linkedin"
                      theme="filled"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.twitter !== "" &&
                data.twitter !== null &&
                data.twitter !== "https://twitter.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.twitter)}
                      className={Userstyles.icon}
                      type="twitter"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.facebook !== "" &&
                data.facebook !== null &&
                data.facebook !== "https://facebook.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.facebook)}
                      className={Userstyles.icon}
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
          <div className={Userstyles.profileDetail}>
            <div className={Userstyles.profileAbout}>
              <h1>About</h1>
              <p className={Userstyles.bioContent}>{data.about}</p>
              {data.skills !== null ? (
                <div className={Userstyles.skills}>
                  <h1>Skills</h1>
                  {data.skills.split(",").map((skill, i) => {
                    return (
                      <div key={i} className={Userstyles.skill}>
                        {skill}
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <Row className={Userstyles.userInfo}>
              <Col span={8}>
                <div className={Userstyles.count}>
                  {data.learning_paths_aggregate.aggregate.count}
                  <span className={Userstyles.text}>Learning Paths</span>
                </div>
              </Col>
              <Col span={8}>
                <div className={Userstyles.count}>
                  {data.followers_aggregate.aggregate.count}
                  <span className={Userstyles.text}>Followers</span>
                </div>
              </Col>
              <Col span={8}>
                <div className={Userstyles.count}>
                  {data.following_aggregate.aggregate.count}
                  <span className={Userstyles.text}>Following</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className={Userstyles.mobileProfile}>
          <div className={Userstyles.profileContainer}>
            <img className={Userstyles.avatar} src={data.profile_pic} alt="" />
            <div className={Userstyles.userDetails}>
              <h2>
                {data.first_name} {data.last_name}
              </h2>
              <h4>{data.username}</h4>
              <h4>{data.bio}</h4>
            </div>

            <div className={Userstyles.userInfo}>
              <Row>
                <Col span={8}>
                  <div className={Userstyles.count}>
                    {data.followers_aggregate.aggregate.count}
                  </div>
                  <div className={Userstyles.text}>Followers</div>
                </Col>
                <Col span={8}>
                  <div className={Userstyles.count}>
                    {data.following_aggregate.aggregate.count}
                  </div>
                  <div className={Userstyles.text}>Following</div>
                </Col>
                <Col span={8}>
                  <div className={Userstyles.count}>
                    {data.learning_paths_aggregate.aggregate.count}
                  </div>
                  <div className={Userstyles.text}>Learning Paths</div>
                </Col>
              </Row>
            </div>

            <div className={Userstyles.bio}>{data.about}</div>

            {data.skills !== null ? (
              <div className={Userstyles.skills}>
                <h2>Skills</h2>
                {data.skills.split(",").map((skill, i) => {
                  return (
                    <div key={i} className={Userstyles.skill}>
                      {skill}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div></div>
            )}

            <div className={Userstyles.social}>
              <Row className={Userstyles.social_row}>
                {data.github !== "" &&
                data.github !== null &&
                data.github !== "https://github.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.github)}
                      className={Userstyles.icon}
                      type="github"
                      theme="filled"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.linkedin !== "" &&
                data.linkedin !== null &&
                data.linkedin !== "https://linkedin.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.linkedin)}
                      className={Userstyles.icon}
                      type="linkedin"
                      theme="filled"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.twitter !== "" &&
                data.twitter !== null &&
                data.twitter !== "https://twitter.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.twitter)}
                      className={Userstyles.icon}
                      type="twitter"
                    />
                  </Col>
                ) : (
                  ""
                )}
                {data.facebook !== "" &&
                data.facebook !== null &&
                data.facebook !== "https://facebook.com/" ? (
                  <Col span={6}>
                    <Icon
                      onClick={() => window.open(data.facebook)}
                      className={Userstyles.icon}
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
        </div>

        <Row className={Userstyles.menuContainer}>
          <Col span={24}>
            <div className={Userstyles.content}>
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
