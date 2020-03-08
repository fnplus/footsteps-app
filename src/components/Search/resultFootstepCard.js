import React, { Component } from "react"
import { RightOutlined } from "@ant-design/icons"
import { Row, Col } from "antd"

import styles from "../../styles/resultFootsteps.module.css"

const levelsText = ["Beginner", "Intermediate", "Expert"]

export class resultFootstepCard extends Component {
  state = {
    resourceTitle: "",
    resourceLink: "",
    iconLink: "",
    video: false,
    internet: false,
    blog: false,
    course: false,
    plan: false,
    quiz: false,
    audio: false,
    page: false,
    book: false,
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
        internet: true,
      })
    } else if (
      this.props.data.resource_type === "Article" ||
      this.props.data.resource_type === "Blog"
    ) {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Read ${this.props.data.resource_type}`,
        blog: true,
      })
    } else if (
      this.props.data.resource_type === "MOOC" ||
      this.props.data.resource_type === "Course" ||
      this.props.data.resource_type === "Lecture"
    ) {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Watch ${this.props.data.resource_type}`,
        course: true,
      })
    } else if (this.props.data.resource_type === "Book") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Read ${this.props.data.resource_type}`,
        book: true,
      })
    } else if (this.props.data.resource_type === "Cheat Sheet") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `See ${this.props.data.resource_type}`,
        page: true,
      })
    } else if (this.props.data.resource_type === "Tool") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Use Tool`,
        plan: true,
      })
    } else if (this.props.data.resource_type === "Research Paper") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Read Paper`,
        page: true,
      })
    } else if (this.props.data.resource_type === "Quiz") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Take ${this.props.data.resource_type}`,
        quiz: true,
      })
    } else if (this.props.data.resource_type === "Resource List") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `See List`,
        page: true,
      })
    } else if (this.props.data.resource_type === "Study Plan") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `See Plan`,
        plan: true,
      })
    } else if (this.props.data.resource_type === "Audio") {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Listen to Audio`,
        audio: true,
      })
    } else if (
      this.props.data.resource_type === "Question" ||
      this.props.data.resource_type === "Competition"
    ) {
      this.setState({
        resourceTitle: this.props.data.resource_type,
        resourceLink: `Visit Site`,
        quiz: true,
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
                {this.state.internet ? (
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

                {this.state.blog ? (
                  <img
                    className={styles.typeImage}
                    src={require("../../images/footsteps/blog.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.course ? (
                  <img
                    className={styles.typeImage}
                    src={require("../../images/footsteps/course.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.plan ? (
                  <img
                    className={styles.typeImage}
                    src={require("../../images/footsteps/plan.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.quiz ? (
                  <img
                    className={styles.typeImage}
                    src={require("../../images/footsteps/quiz.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.audio ? (
                  <img
                    className={styles.typeImage}
                    src={require("../../images/footsteps/audio.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.page ? (
                  <img
                    className={styles.typeImage}
                    src={require("../../images/footsteps/page.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.book ? (
                  <img
                    className={styles.typeImage}
                    src={require("../../images/footsteps/book.png")}
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
                <RightOutlined />
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    )
  }
}

export default resultFootstepCard
