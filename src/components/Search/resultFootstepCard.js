import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import styles from "../../styles/resultFootsteps.module.css"

const levelsText = ["Beginner", "Intermediate", "Expert"]

export class resultFootstepCard extends Component {
  state = {
    resourceTitle: "",
    resourceLink: "",
    iconLink: "",
    video: false,
    documentation: false,
  }

  componentDidMount() {
    if (this.props.data.resource_type === "Video") {
      this.setState({
        resourceTitle: "Video Tutorial",
        resourceLink: "Watch Video",
        video: true,
      })
    } else if (
      this.props.data.resource_type === "Website" ||
      this.props.data.resource_type === "Documentation"
    ) {
      this.setState({
        resourceTitle: "Documentation",
        resourceLink: "Visit Website",
        documentation: true,
      })
    }
  }

  render() {
    const { data } = this.props

    return (
      <Col xs={24} lg={6}>
        <div style={{ display: "flex", justifyContent: "center" }}>
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

            {/* <Row className={styles.levelContainer}>
            <Col className={styles.levelTitle} span={8}>
              By:{" "}
            </Col>
            <Col className={styles.levelType} span={16}>
              {data.}
            </Col>
          </Row> */}

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
          </div>
        </div>
      </Col>
    )
  }
}

export default resultFootstepCard
