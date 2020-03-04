import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import ResultFootstepstyles from "../../styles/resultFootsteps.module.css"

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
          <div className={ResultFootstepstyles.cardContainer}>
            <img
              className={ResultFootstepstyles.icon}
              src={data.resource_icon}
              alt=""
            />

            <div className={ResultFootstepstyles.detailsContainer}>
              <div className={ResultFootstepstyles.title}>{data.title}</div>
              <div className={ResultFootstepstyles.description}>
                {data.description}
              </div>
            </div>

            <Row className={ResultFootstepstyles.typeContainer}>
              <Col span={4}>
                {this.state.internet ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/internet.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.video ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/video.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.blog ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/blog.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.course ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/course.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.plan ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/plan.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.quiz ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/quiz.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.audio ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/audio.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.page ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/page.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}

                {this.state.book ? (
                  <img
                    className={ResultFootstepstyles.typeImage}
                    src={require("../../images/footsteps/book.png")}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </Col>
              <Col className={ResultFootstepstyles.typeTitle} span={20}>
                {this.state.resourceTitle}
              </Col>
            </Row>

            <Row className={ResultFootstepstyles.levelContainer}>
              <Col className={ResultFootstepstyles.levelTitle} span={8}>
                Level:{" "}
              </Col>
              <Col className={ResultFootstepstyles.levelType} span={16}>
                {levelsText[data.level]}
              </Col>
            </Row>

            {/* <Row className={ResultFootstepstyles.levelContainer}>
            <Col className={ResultFootstepstyles.levelTitle} span={8}>
              By:{" "}
            </Col>
            <Col className={ResultFootstepstyles.levelType} span={16}>
              {data.}
            </Col>
          </Row> */}

            <Row
              className={ResultFootstepstyles.resourceLink}
              onClick={() => window.open(data.resource_url)}
            >
              <Col span={16}>
                <h4 className={ResultFootstepstyles.linkTitle}>
                  {this.state.resourceLink}
                </h4>
              </Col>
              <Col span={8} className={ResultFootstepstyles.linkArrow}>
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
