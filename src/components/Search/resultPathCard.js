import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

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
        <Row className={styles.cardContainer}>
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
                    {data.user.first_name + " " + data.user.last_name}
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
                <Icon type="down" onClick={() => this.expand()} />
              </Col>
            </Row>
          </Col>
        </Row>
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
            />
          ))}
        </div>
      </div>
    )
  }
}

export default resultPathCard
