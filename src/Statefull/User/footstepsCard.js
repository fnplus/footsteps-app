import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import Footstepstyles from "../../styles/footsteps.module.css"

const levelsText = ["Beginner", "Intermediate", "Expert"]

export class footstepsCard extends Component {
  state = {
    resourceTitle: "",
    resourceLink: "",
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
        internet: true,
      })
    } else if (
      this.props.footstep.resource_type === "Article" ||
      this.props.footstep.resource_type === "Blog"
    ) {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Read ${this.props.footstep.resource_type}`,
        blog: true,
      })
    } else if (
      this.props.footstep.resource_type === "MOOC" ||
      this.props.footstep.resource_type === "Course" ||
      this.props.footstep.resource_type === "Lecture"
    ) {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Watch ${this.props.footstep.resource_type}`,
        course: true,
      })
    } else if (this.props.footstep.resource_type === "Book") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Read ${this.props.footstep.resource_type}`,
        book: true,
      })
    } else if (this.props.footstep.resource_type === "Cheat Sheet") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `See ${this.props.footstep.resource_type}`,
        page: true,
      })
    } else if (this.props.footstep.resource_type === "Tool") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Use Tool`,
        plan: true,
      })
    } else if (this.props.footstep.resource_type === "Research Paper") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Read Paper`,
        page: true,
      })
    } else if (this.props.footstep.resource_type === "Quiz") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Take ${this.props.footstep.resource_type}`,
        quiz: true,
      })
    } else if (this.props.footstep.resource_type === "Resource List") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `See List`,
        page: true,
      })
    } else if (this.props.footstep.resource_type === "Study Plan") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `See Plan`,
        plan: true,
      })
    } else if (this.props.footstep.resource_type === "Audio") {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Listen to Audio`,
        audio: true,
      })
    } else if (
      this.props.footstep.resource_type === "Question" ||
      this.props.footstep.resource_type === "Competition"
    ) {
      this.setState({
        resourceTitle: this.props.footstep.resource_type,
        resourceLink: `Visit Site`,
        quiz: true,
      })
    }
  }

  render() {
    const data = this.props.footstep

    return (
      <div className={Footstepstyles.cardContainer}>
        <img className={Footstepstyles.icon} src={data.resource_icon} alt="" />

        <div className={Footstepstyles.detailsContainer}>
          <div className={Footstepstyles.title}>{data.title}</div>
          <div className={Footstepstyles.description}>{data.description}</div>
        </div>

        <Row className={Footstepstyles.typeContainer}>
          <Col span={4}>
            {this.state.internet ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/internet.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.video ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/video.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.blog ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/blog.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.course ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/course.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.plan ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/plan.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.quiz ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/quiz.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.audio ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/audio.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.page ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/page.png")}
                alt=""
              />
            ) : (
              ""
            )}

            {this.state.book ? (
              <img
                className={Footstepstyles.typeImage}
                src={require("../../images/footsteps/book.png")}
                alt=""
              />
            ) : (
              ""
            )}
          </Col>
          <Col className={Footstepstyles.typeTitle} span={20}>
            {this.state.resourceTitle}
          </Col>
        </Row>

        <Row className={Footstepstyles.levelContainer}>
          <Col className={Footstepstyles.levelTitle} span={8}>
            Level:{" "}
          </Col>
          <Col className={Footstepstyles.levelType} span={16}>
            {levelsText[data.level]}
          </Col>
        </Row>

        <Row
          className={Footstepstyles.resourceLink}
          onClick={() => window.open(data.resource_url)}
        >
          <Col span={16}>
            <h4 className={Footstepstyles.linkTitle}>
              {this.state.resourceLink}
            </h4>
          </Col>
          <Col span={8} className={Footstepstyles.linkArrow}>
            <Icon type="right" />
          </Col>
        </Row>
        <div style={{ display: "inlineBlock" }}>
          <div className={Footstepstyles.timelineDot}></div>
          <div
            style={
              this.props.position + 1 === this.props.size
                ? { opacity: "0", width: "150px" }
                : {}
            }
            className={Footstepstyles.timelineBox}
          ></div>
        </div>
      </div>
    )
  }
}

export default footstepsCard
