import React, { Component } from "react"
import { Row, Col, Icon } from "antd"

import FootstepCard from "../User/footstepsCard"
import Resultstyles from "../../styles/result.module.css"

export class resultPathCard extends Component {
  state = {
    expand: false,
  }

  expand = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  render() {
    const { data } = this.props

    return (
      <div>
        <Row
          className={Resultstyles.cardContainer}
          onClick={() => this.expand()}
        >
          <Col span={2}>
            <div className={Resultstyles.iconContainer}>
              <img src={data.icon} alt="" className={Resultstyles.icon} />
            </div>
          </Col>
          <Col span={22} className={Resultstyles.contentContainer}>
            <Row>
              <Col span={22} className={Resultstyles.pathDescription}>
                <h1>{data.title}</h1>
                <h3>{data.description}</h3>

                <div className={Resultstyles.pathInfo}>
                  <p>
                    <span>By:</span>{" "}
                    {data.user.first_name + " " + data.user.last_name}
                  </p>

                  <p>
                    {" "}
                    <span>Votes:</span> {data.votes_aggregate.aggregate.count}
                  </p>
                </div>
              </Col>
              <Col
                span={2}
                className={
                  this.state.expand
                    ? Resultstyles.pathExpand + " " + Resultstyles.expandRotate
                    : Resultstyles.pathExpand
                }
              >
                <Icon type="down" />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={Resultstyles.mobCardContainer}>
          <Row onClick={() => this.expand()}>
            <Col
              span={22}
              style={{
                paddingRight: "20px",
              }}
            >
              <h1>{data.title}</h1>
              <h3>{data.description}</h3>
            </Col>
            <Col
              span={2}
              className={
                this.state.expand
                  ? Resultstyles.pathExpand + " " + Resultstyles.expandRotate
                  : Resultstyles.pathExpand
              }
            >
              <Icon type="down" onClick={() => this.expand()} />
            </Col>
          </Row>
          <Row>
            <Col span={12} className={Resultstyles.mobInfoBy}>
              <p>
                <span>By:</span>{" "}
                {data.user.first_name + " " + data.user.last_name}
              </p>
            </Col>
            <Col span={12} className={Resultstyles.mobInfoVotes}>
              <span>Votes:</span> {data.votes_aggregate.aggregate.count}
            </Col>
          </Row>
        </div>
        <div
          className={
            this.state.expand
              ? Resultstyles.footstepsContainer
              : Resultstyles.footstepsContainer +
                " " +
                Resultstyles.footstepsHide
          }
        >
          {data.footsteps.map((footstep, index) => (
            <FootstepCard
              footstep={footstep}
              size={data.footsteps.length}
              position={index}
              key={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default resultPathCard
