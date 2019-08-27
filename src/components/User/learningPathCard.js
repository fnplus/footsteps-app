import React, { Component } from "react"
import { Row, Col, Icon, Progress } from "antd"

import FootstepCard from "./footstepsCard"

import styles from "../../styles/footsteps.module.css"

export class learningPathCard extends Component {
  state = {
    expand: false,
  }

  expand = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  render() {
    let path = this.props.path

    return (
      <div>
        <div className={styles.learningPathCard} onClick={() => this.expand()}>
          <Row>
            <Col xs={24} lg={5}>
              <img className={styles.pathIcon} src={path.icon} alt="" />
            </Col>
            <Col xs={24} lg={17} className={styles.pathHeading}>
              <h1>{path.title}</h1>
              <h5>{path.description}</h5>
              <Progress percent={path.percent} />
            </Col>
            <Col
              xs={24}
              lg={2}
              className={
                this.state.expand
                  ? styles.pathExpand + " " + styles.expandRotate
                  : styles.pathExpand
              }
            >
              <Icon type="down" />
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
          {path.footsteps.map((footstep, index) => (
            <FootstepCard
              footstep={footstep}
              size={path.footsteps.length}
              position={index}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default learningPathCard
