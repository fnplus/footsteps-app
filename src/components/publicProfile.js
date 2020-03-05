import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { navigate } from "gatsby"
import LearningPathCard from "../Statefull/User/learningPathCard"
import { Row, Col, Icon } from "antd"

import Header from "../Stateless/Layout/sideDrawer"
import Footer from "../Stateless/Layout/footer"
import Loader from "../Stateless/Layout/loader"

import Userstyles from "../styles/user.module.css"
import Layoutstyles from "../styles/layout.module.css"
import Resultstyles from "../styles/result.module.css"

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
                <div className={Layoutstyles.content}>
                  <Header show={false} />
                  <Loader />
                </div>
                <Footer />
              </div>
            )
          if (error)
            return (
              <div>
                <div className={Layoutstyles.content}>
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
                  <div className={Userstyles.content}>
                    <Header show={false} />
                    <div className={Userstyles.container}>
                      <div
                        className={
                          Userstyles.profileContainer +
                          " " +
                          Userstyles.desktopProfile
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
                            <p className={Userstyles.bioContent}>
                              {data.about}
                            </p>
                            {data.skills ? (
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
                                <span className={Userstyles.text}>
                                  Learning Paths
                                </span>
                              </div>
                            </Col>
                            <Col span={8}>
                              <div className={Userstyles.count}>
                                {data.followers_aggregate.aggregate.count}
                                <span className={Userstyles.text}>
                                  Followers
                                </span>
                              </div>
                            </Col>
                            <Col span={8}>
                              <div className={Userstyles.count}>
                                {data.following_aggregate.aggregate.count}
                                <span className={Userstyles.text}>
                                  Following
                                </span>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className={Userstyles.profileLearningPath}>
                          <h1>Learning Paths ({data.learning_paths.length})</h1>
                        </div>
                        <div className={Userstyles.profilePath}>
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

                      <div className={Userstyles.mobileProfile}>
                        <div className={Userstyles.profileContainer}>
                          <img
                            className={Userstyles.avatar}
                            src={data.profile_pic}
                            alt=""
                          />
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
                                  {
                                    data.learning_paths_aggregate.aggregate
                                      .count
                                  }
                                </div>
                                <div className={Userstyles.text}>
                                  Learning Paths
                                </div>
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
                        <Row>
                          <div className={Userstyles.mobileProfileLearningPath}>
                            <h1>
                              Learning Paths ({data.learning_paths.length})
                            </h1>
                          </div>
                          <div className={Resultstyles.resultPath}>
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
                  <div className={Layoutstyles.content}>
                    <Header show={false} />
                    <div>
                      <h1 className={Layoutstyles.public_not_found}>
                        No profile found with username{" "}
                        <span
                          className={Layoutstyles.public_not_found_username}
                        >
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
                          className={Layoutstyles.public_not_found_go_home}
                          onClick={() => navigate("/")}
                        >
                          <Icon type="home" style={{ marginRight: "10px" }} />{" "}
                          Go Home
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
