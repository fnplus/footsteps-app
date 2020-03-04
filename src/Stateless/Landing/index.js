import React, { Component } from "react"
import { Row, Col } from "antd"

import Searchbar from "../../Statefull/Landing/searchbar"
import Landingstyles from "../../styles/landing.module.css"
export class index extends Component {
  render() {
    return (
      <div className={Landingstyles.container}>
        <Row>
          <Col sm={24} lg={14}>
            <h1 className={Landingstyles.heading}>Hi there!</h1>
            <p className={Landingstyles.subHeading}>
              What do you want to learn today?
            </p>
            <Searchbar />
            <br /> <br />
            <img
              src={require("../../images/roadSign.svg")}
              alt="Road Sign"
              className={Landingstyles.mobileImage}
            />
          </Col>
          <Col sm={24} lg={10} className={Landingstyles.imageContainer}>
            <img src={require("../../images/roadSign.svg")} alt="Road Sign" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default index
