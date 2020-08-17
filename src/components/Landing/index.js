import React, { Component } from "react"
import { Row, Col } from "antd"
import Searchbar from "./searchbar"
import styles from "../../styles/landing.module.css"

export class index extends Component {
  render() {
    return (
      <div>
        {/* First page */}
        <div className={styles.container}>
          <Row>
            <Col sm={24} lg={14}>
              <p className={styles.subHeading}>
                Struggling with learning a new concept? <br />
                Does the plethora of resources overwhelm you?
                <br />
                Are you scratching your head, wondering how some else did it?
                <br />
                <br />
                <h3 className={styles.subHeading2}>
                  <b>Well, fret no more!</b>
                </h3>
              </p>
              <h1 className={styles.heading}>Welcome to Footsteps</h1>
              <br />
              <br />
              <Searchbar />
              <br />
              <br />
              <img
                src={require("../../images/roadSign.svg")}
                alt="Road Sign"
                className={styles.mobileImage}
              />
            </Col>
            <Col sm={24} lg={10} className={styles.imageContainer}>
              <img src={require("../../images/roadSign.svg")} alt="Road Sign" />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default index
