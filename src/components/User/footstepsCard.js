import React, { Component } from "react"
import { Row, Col } from "antd"

import styles from "../../styles/footsteps.module.css"

export class footstepsCard extends Component {
  state = {
    resourceTitle: "",
    resourceLink: "",
    iconLink: "",
    video: false,
    documentation: false,
  }

  componentDidMount() {
    console.log(this.props.footstep)
    if (this.props.footstep.resourceType === "Video") {
      this.setState({
        resourceTitle: "Video Tutorial",
        resourceLink: "Watch Video",
        video: true,
      })
    } else if (
      this.props.footstep.resourceType === "Website" ||
      this.props.footstep.resourceType === "Documentation"
    ) {
      this.setState({
        resourceTitle: "Documentation",
        resourceLink: "Visit Website",
        documentation: true,
      })
    }
  }

  render() {
    const data = this.props.footstep

    return (
      <div className={styles.cardContainer}>
        <img className={styles.icon} src={data.resourceIcon} alt="" />

        <div className={styles.detailsContainer}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.description}>{data.description}</div>
        </div>

        <Row className={styles.typeContainer}>
          <Col span={4}>
            {this.state.documentation ? (
              <img
                className={styles.typeImage}
                src={require("../../images/footsteps/internet.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.video ? (
              <img
                className={styles.typeImage}
                src={require("../../images/footsteps/video.png")}
                alt=""
              />
            ) : (
              ""
            )}
          </Col>
          <Col className={styles.typeTitle} span={20}>
            {this.state.resourceTitle}
          </Col>
        </Row>
      </div>
    )
  }
}

export default footstepsCard
