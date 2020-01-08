import React, { Component } from "react"
import { Row, Col } from "antd"

import Searchbar from "./searchbar"
import styles from "../../styles/landing.module.css"

export class index extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row>
          <Col sm={24} lg={14}>
            <h1 className={styles.heading}>Hi there!</h1>
            <p className={styles.subHeading}>
              What do you want to learn today?
            </p>
            <img
              src={require("../../images/road-sign.svg")}
              alt=""
              className={styles.mobileImage}
            />
            <Searchbar />
          </Col>
          <Col sm={24} lg={10} className={styles.imageContainer}>
            <img src={require("../../images/road-sign.svg")} alt="" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default index
