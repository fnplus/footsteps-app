import React, { Component } from "react"
import { Row, Col, Icon, Progress } from "antd"

import styles from "../../styles/footsteps.module.css"
import FootstepCard from "./footstepsCard"

export class learningPaths extends Component {
  state = {
    expand: false,
  }

  expand = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  render() {
    const data = this.props.learning_paths

    return (
      <div className={styles.learningPathsContainer}>
        {data.map((path, index) => (
          <div key={index}>
            <div className={styles.learningPathCard}>
              <Row>
                <Col span={5}>
                  <img className={styles.pathIcon} src={path.icon} alt="" />
                </Col>
                <Col span={17} className={styles.pathHeading}>
                  <h1>{path.title}</h1>
                  <h5>{path.description}</h5>
                  <Progress percent={path.percent} />
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
        ))}
      </div>
    )
  }
}

export default learningPaths
