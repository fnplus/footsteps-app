import React, { Component } from "react"
import { Row, Col, Card } from "antd"
import Searchbar from "./searchbar"
import styles from "../../styles/landing.module.css"

export class index extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          {/* First page */}
          <Row>
            <Col sm={24} lg={14}>
              <p className={styles.subHeading}>
                Struggling with learning a new concept? <br />
                Does the plethora of resources overwhelm you?
                <br />
                Are you scratching your head, wondering how some else did it?
                <br />
                <h3 className={styles.subHeading2}>
                  <b>Well, fret no gitmore. </b>
                </h3>
              </p>
              <br />
              <br />

              <h1 className={styles.heading}>Welcome to Footsteps</h1>
              <h3 className={styles.subHeading2}>
                A search 🔎engine for the 21st-century learner.
              </h3>
              <Searchbar />

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
