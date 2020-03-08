import React, { Component } from "react"
import { DownOutlined, EditOutlined } from "@ant-design/icons"
import { Row, Col, Progress } from "antd"
import { navigate } from "gatsby"

import FootstepCard from "./footstepsCard"

import styles from "../../styles/footsteps.module.css"

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
            className={styles.editBtn}
            onClick={() => navigate(`/editPath/${path.id}`)}
          >
            <EditOutlined />
          </div>
        ) : (
          ""
        )}

        <div className={styles.learningPathCard} onClick={() => this.expand()}>
          <Row>
            <Col xs={24} lg={4}>
              <img className={styles.pathIcon} src={path.icon} alt="" />
            </Col>
            <Col xs={24} lg={18} className={styles.pathHeading}>
              <h1>{path.title}</h1>
              <h5>{path.description}</h5>
              <Progress percent={path.percent} />
            </Col>
            <Col
              xs={24}
              lg={2}
              className={
                this.state.expand
                  ? styles.pathExpand + " " + styles.expandRotate
                  : styles.pathExpand
              }
            >
              <DownOutlined />
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
    )
  }
}

export default learningPathCard
