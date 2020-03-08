import React, { Component } from "react"
import { DownOutlined } from "@ant-design/icons"
import { Row, Col } from "antd"

import FootstepCard from "../User/footstepsCard"
import styles from "../../styles/result.module.css"

export class resultPathCard extends Component {
  state = {
    expand: false,
  }

  expand = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  render() {
    const { data } = this.props

    return (
      <div>
        <Row className={styles.cardContainer} onClick={() => this.expand()}>
          <Col span={2}>
            <div className={styles.iconContainer}>
              <img src={data.icon} alt="" className={styles.icon} />
            </div>
          </Col>
          <Col span={22} className={styles.contentContainer}>
            <Row>
              <Col span={22} className={styles.pathDescription}>
                <h1>{data.title}</h1>
                <h3>{data.description}</h3>

                <div className={styles.pathInfo}>
                  <p>
                    <span>By:</span>{" "}
                    <a href={"user/" + data.user.username}>
                      {data.user.first_name + " " + data.user.last_name}
                    </a>
                  </p>

                  <p>
                    {" "}
                    <span>Votes:</span> {data.votes_aggregate.aggregate.count}
                  </p>
                </div>
              </Col>
              <Col
                span={2}
                className={
                  this.state.expand
                    ? styles.pathExpand + " " + styles.expandRotate
                    : styles.pathExpand
                }
              >
                <DownOutlined />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={styles.mobCardContainer}>
          <Row onClick={() => this.expand()}>
            <Col
              span={22}
              style={{
                paddingRight: "20px",
              }}
            >
              <h1>{data.title}</h1>
              <h3>{data.description}</h3>
            </Col>
            <Col
              span={2}
              className={
                this.state.expand
                  ? styles.pathExpand + " " + styles.expandRotate
                  : styles.pathExpand
              }
            >
              <DownOutlined onClick={() => this.expand()} />
            </Col>
          </Row>
          <Row>
            <Col span={12} className={styles.mobInfoBy}>
              <p>
                <span>By:</span>{" "}
                {data.user.first_name + " " + data.user.last_name}
              </p>
            </Col>
            <Col span={12} className={styles.mobInfoVotes}>
              <span>Votes:</span> {data.votes_aggregate.aggregate.count}
            </Col>
          </Row>
        </div>
        <div
          className={
            this.state.expand
              ? styles.footstepsContainer
              : styles.footstepsContainer + " " + styles.footstepsHide
          }
        >
          {data.footsteps.map((footstep, index) => (
            <FootstepCard
              footstep={footstep}
              size={data.footsteps.length}
              position={index}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default resultPathCard
