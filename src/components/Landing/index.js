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
                        
               {/*  About footsteps */}
        <div className={styles.AboutUs}>
          <Row>
            <Col sm={24} lg={9} className={styles.AboutUsVideo}>
              <iframe
                width="100%"
                height="100%"
                src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Col>
            <Col sm={24} lg={15} className={styles.AboutDesc}>
              <h1>
                <b> About us</b> <br />
              </h1>
              In today's era, a new knowledge is a few mouse clicks away. As the
              internet is flooded with a plethora of resources, it raises a new
              problem for a modern-day learner. It becomes difficult for him/her
              to choose the right resources suited for his/her needs. Footsteps
              is here to tackle this issue
              <br />
              <br /> Footsteps is a search engine of community-made 🧑‍🤝‍🧑learning
              resources for the 21st-century learner. Now, you can learn by
              following the footsteps (journey) of experts
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

export default index
