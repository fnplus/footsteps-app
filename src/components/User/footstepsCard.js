import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import styles from "../../styles/footsteps.module.css"

const levelsText = ["Beginner", "Intermediate", "Expert"]

export class footstepsCard extends Component {
  state = {
    resourceTitle: "",
    resourceLink: "",
    iconLink: "",
    video: false,
    documentation: false,
  }

  componentDidMount() {
    if (this.props.footstep.resource_type === "Video") {
      this.setState({
        resourceTitle: "Video Tutorial",
        resourceLink: "Watch Video",
        video: true,
      })
    } else if (
      this.props.footstep.resource_type === "Website" ||
      this.props.footstep.resource_type === "Documentation"
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
        <img className={styles.icon} src={data.resource_icon} alt="" />

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

        <Row className={styles.levelContainer}>
          <Col className={styles.levelTitle} span={8}>
            Level:{" "}
          </Col>
          <Col className={styles.levelType} span={16}>
            {levelsText[data.level]}
          </Col>
        </Row>

        <Row
          className={styles.resourceLink}
          onClick={() => window.open(data.resource_url)}
        >
          <Col span={16}>
            <h4 className={styles.linkTitle}>{this.state.resourceLink}</h4>
          </Col>
          <Col span={8} className={styles.linkArrow}>
            <Icon type="right" />
          </Col>
        </Row>
        <div style={{ display: "inlineBlock" }}>
          <div className={styles.timelineDot}></div>
          <div
            style={
              this.props.position + 1 === this.props.size
                ? { display: "none" }
                : {}
            }
            className={styles.timelineBox}
          ></div>
        </div>
      </div>
    )
  }
}

export default footstepsCard
