import React, { Component } from "react"
import { Row, Col, Icon, Progress } from "antd"

import styles from "../../styles/footsteps.module.css"
import FootstepCard from "./footstepsCard"

export class footsteps extends Component {
  state = {
    expand: false,
  }

  expand = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  render() {
    const data = this.props.learningPaths

    return (
      <div className={styles.learningPathsContainer}>
        {data.map(path => (
          <div>
            <div className={styles.learningPathCard}>
              <Row>
                <Col span={5}>
                  <img className={styles.pathIcon} src={path.icon} alt="" />
                </Col>
                <Col span={17} className={styles.pathHeading}>
                  <h1>{path.title}</h1>
                  <h5>{path.description}</h5>
                  <Progress percent={50} />
                </Col>
                <Col span={2} className={styles.pathExpand}>
                  <Icon type="down" onClick={() => this.expand()} />
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
              {path.footsteps.map(footstep => (
                <FootstepCard footstep={footstep} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default footsteps
