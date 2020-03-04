import React, { Component } from "react"
import { Row, Col, Icon, Progress } from "antd"
import { navigate } from "gatsby"

import FootstepCard from "./footstepsCard"

import Footstepstyles from "../../styles/footsteps.module.css"

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
        {this.props.show_edit ? (
          <div
            title="Edit Path"
            className={Footstepstyles.editBtn}
            onClick={() => navigate(`/editPath/${path.id}`)}
          >
            <Icon type="edit" />
          </div>
        ) : (
          ""
        )}

        <div
          className={Footstepstyles.learningPathCard}
          onClick={() => this.expand()}
        >
          <Row>
            <Col xs={24} lg={4}>
              <img className={Footstepstyles.pathIcon} src={path.icon} alt="" />
            </Col>
            <Col xs={24} lg={18} className={Footstepstyles.pathHeading}>
              <h1>{path.title}</h1>
              <h5>{path.description}</h5>
              <Progress percent={path.percent} />
            </Col>
            <Col
              xs={24}
              lg={2}
              className={
                this.state.expand
                  ? Footstepstyles.pathExpand +
                    " " +
                    Footstepstyles.expandRotate
                  : Footstepstyles.pathExpand
              }
            >
              <Icon type="down" />
            </Col>
          </Row>
        </div>
        <div
          className={
            this.state.expand
              ? Footstepstyles.footstepsContainer
              : Footstepstyles.footstepsContainer +
                " " +
                Footstepstyles.footstepsHide
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
