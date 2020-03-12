import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "gatsby"
import LearningPathCard from "./User/learningPathCard"

import {
  FacebookFilled,
  GithubFilled,
  HomeOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons"

import { Row, Col } from "antd"

import Header from "./Layout/sideDrawer"
import Footer from "./Layout/footer"
import Loader from "./Layout/loader"
import SEO from "./SEO/SEO"

import userStyles from "../styles/user.module.css"
import styles from "../styles/layout.module.css"
import pathStyles from "../styles/result.module.css"

export class publicProfile extends Component {
  state = {
    data: null,
    userName: "",
    user: {},
  }

  render() {
    return (
      <Query
        query={USERS_QUERY_APOLLO}
        variables={{ username: this.props.username }}
        onCompleted={data => {
          this.setState({ data: data.User[0] })
        }}
      >
        {({ d, loading, error }) => {
          const { data } = this.state
          if (loading)
            return (
              <div>
                <div className={styles.content}>
                  <Header show={false} />
                  <Loader />
                </div>
                <Footer />
              </div>
            )
          if (error)
            return (
              <div>
                <div className={styles.content}>
                  <Header show={false} />
                  <h1>Error Loading User</h1>
                </div>
                <Footer />
              </div>
            )
          return (
            <div>
              {data ? (
                <div>
                  <SEO
                    title={`Walk in the footsteps of ${data.first_name}`}
                    description={`${data.first_name} has made learning paths using FootstepsApp. Discover ${data.first_name}'s recommended way to learn.`}
                  />
                  <div className={userStyles.content}>
                    <Header show={false} />
                    <div className={userStyles.container}>
                      <div
                        className={
                          userStyles.profileContainer +
                          " " +
                          userStyles.desktopProfile
                        }
                      >
                        <div className={userStyles.profileInfo}>
                          <h1>
                            {data.first_name} {data.last_name}
                          </h1>
                          <h2>{data.username}</h2>
                          <h3>{data.bio}</h3>
                        </div>
                        <div className={userStyles.profileImgContainer}>
                          <img
                            className={userStyles.profileImg}
                            src={data.profile_pic}
                            alt=""
                          />
                          <div className={userStyles.social}>
                            <Row className={userStyles.social_row}>
                              {data.github !== "" &&
                              data.github !== null &&
                              data.github !== "https://github.com/" ? (
                                <Col span={6}>
                                  <GithubFilled
                                    onClick={() => window.open(data.github)}
                                    className={userStyles.icon}
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
                                    className={userStyles.icon}
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
                                    className={userStyles.icon}
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
                                    className={userStyles.icon}
                                  />
                                </Col>
                              ) : (
                                ""
                              )}
                            </Row>
                          </div>
                        </div>
                        <div className={userStyles.profileDetail}>
                          <div className={userStyles.profileAbout}>
                            <h1>About</h1>
                            <p className={userStyles.bioContent}>
                              {data.about}
                            </p>
                            {data.skills ? (
                              <div className={userStyles.skills}>
                                <h1>Skills</h1>
                                {data.skills.split(",").map((skill, i) => {
                                  return (
                                    <div key={i} className={userStyles.skill}>
                                      {skill}
                                    </div>
                                  )
                                })}
                              </div>
                            ) : (
                              <div></div>
                            )}
                          </div>
                          <Row className={userStyles.userInfo}>
                            <Col span={8}>
                              <div className={userStyles.count}>
                                {data.learning_paths_aggregate.aggregate.count}
                                <span className={userStyles.text}>
                                  Learning Paths
                                </span>
                              </div>
                            </Col>
                            <Col span={8}>
                              <div className={userStyles.count}>
                                {data.followers_aggregate.aggregate.count}
                                <span className={userStyles.text}>
                                  Followers
                                </span>
                              </div>
                            </Col>
                            <Col span={8}>
                              <div className={userStyles.count}>
                                {data.following_aggregate.aggregate.count}
                                <span className={userStyles.text}>
                                  Following
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className={userStyles.profileLearningPath}>
                          <h1>Learning Paths ({data.learning_paths.length})</h1>
                        </div>
                        <div className={userStyles.profilePath}>
                          {data.learning_paths.map((data, index) => {
                            return (
                              <LearningPathCard
                                key={index}
                                path={data}
                                show_edit={false}
                              ></LearningPathCard>
                            )
                          })}
                        </div>
                      </div>

                      <div className={userStyles.mobileProfile}>
                        <div className={userStyles.profileContainer}>
                          <img
                            className={userStyles.avatar}
                            src={data.profile_pic}
                            alt=""
                          />
                          <div className={userStyles.userDetails}>
                            <h2>
                              {data.first_name} {data.last_name}
                            </h2>
                            <h4>{data.username}</h4>
                            <h4>{data.bio}</h4>
                          </div>

                          <div className={userStyles.userInfo}>
                            <Row>
                              <Col span={8}>
                                <div className={userStyles.count}>
                                  {data.followers_aggregate.aggregate.count}
                                </div>
                                <div className={userStyles.text}>Followers</div>
                              </Col>
                              <Col span={8}>
                                <div className={userStyles.count}>
                                  {data.following_aggregate.aggregate.count}
                                </div>
                                <div className={userStyles.text}>Following</div>
                              </Col>
                              <Col span={8}>
                                <div className={userStyles.count}>
                                  {
                                    data.learning_paths_aggregate.aggregate
                                      .count
                                  }
                                </div>
                                <div className={userStyles.text}>
                                  Learning Paths
                                </div>
                              </Col>
                            </Row>
                          </div>

                          <div className={userStyles.bio}>{data.about}</div>

                          {data.skills !== null ? (
                            <div className={userStyles.skills}>
                              <h2>Skills</h2>
                              {data.skills.split(",").map((skill, i) => {
                                return (
                                  <div key={i} className={userStyles.skill}>
                                    {skill}
                                  </div>
                                )
                              })}
                            </div>
                          ) : (
                            <div></div>
                          )}

                          <div className={userStyles.social}>
                            <Row className={userStyles.social_row}>
                              {data.github !== "" &&
                              data.github !== null &&
                              data.github !== "https://github.com/" ? (
                                <Col span={6}>
                                  <GithubFilled
                                    onClick={() => window.open(data.github)}
                                    className={userStyles.icon}
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
                                    className={userStyles.icon}
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
                                    className={userStyles.icon}
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
                                    className={userStyles.icon}
                                  />
                                </Col>
                              ) : (
                                ""
                              )}
                            </Row>
                          </div>
                        </div>
                        <Row>
                          <div className={userStyles.mobileProfileLearningPath}>
                            <h1>
                              Learning Paths ({data.learning_paths.length})
                            </h1>
                          </div>
                          <div className={pathStyles.resultPath}>
                            {data.learning_paths.map((data, index) => {
                              return (
                                <LearningPathCard
                                  key={index}
                                  path={data}
                                  show_edit={false}
                                ></LearningPathCard>
                              )
                            })}
                          </div>
                        </Row>
                      </div>
                    </div>
                  </div>

                  <Footer />
                </div>
              ) : (
                <div>
                  <div className={styles.content}>
                    <Header show={false} />
                    <div>
                      <h1 className={styles.public_not_found}>
                        No profile found with username{" "}
                        <span className={styles.public_not_found_username}>
                          {this.props.username}
                        </span>
                      </h1>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className={styles.public_not_found_go_home}
                          onClick={() => navigate("/")}
                        >
                          <HomeOutlined style={{ marginRight: "10px" }} /> Go
                          Home
                        </div>
                      </div>
                    </div>
                  </div>

                  <Footer />
                </div>
              )}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default publicProfile

export const USERS_QUERY_APOLLO = gql`
  query getuser($username: String!) {
    User: Users(where: { username: { _eq: $username } }) {
      id
      first_name
      last_name
      username
      skills
      profile_pic
      following_aggregate {
        aggregate {
          count
        }
      }
      following {
        follower_info {
          username
          first_name
          last_name
          profile_pic
          id
        }
      }
      followers_aggregate {
        aggregate {
          count
        }
      }
      followers {
        follow_info {
          username
          profile_pic
          first_name
          last_name
          id
        }
      }
      about
      bio
      linkedin
      github
      facebook
      twitter
      learning_paths(where: { isPrivate: { _eq: false } }) {
        id
        title
        description
        icon
        votes_aggregate {
          aggregate {
            count
          }
        }
        footsteps {
          id
          title
          resource_icon
          resource_url
          resource_type
          level
          description
        }
      }
      learning_paths_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`
