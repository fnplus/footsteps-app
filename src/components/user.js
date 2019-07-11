import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import styles from "../styles/user.module.css"
import Footsteps from "./footsteps"

export class user extends Component {
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
                  <div className={styles.count}>{data.followers}</div>
                  <div className={styles.text}>Followers</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>{data.following}</div>
                  <div className={styles.text}>Following</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>{data.footsteps.length}</div>
                  <div className={styles.text}>Footsteps</div>
                </Col>
              </Row>
            </div>

            <div className={styles.bio}>{data.bio.slice(0, 200)}</div>

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
          <Col
            lg={16}
            style={{ backgroundColor: "blue", height: "100vh" }}
          ></Col>
        </Row>
      </div>
    )
  }
}

export default user
