import React, { Component } from "react"
import { Row, Col } from "antd"

import styles from "../../styles/footsteps.module.css"
// import "../../styles/footsteps.module.css"
import FootstepCard from "./footstepsCard"

export class footsteps extends Component {
  render() {
    const data = this.props.learningPaths

    return (
      <div>
        {data.map(path => (
          <div>
            <div className={styles.pathHeading}>
              <h1>{path.title}</h1>
              <h5>{path.description}</h5>
            </div>
            <div
              className={
                styles.footstepsContainerHorizontal +
                " " +
                styles.footstepsContainer
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
