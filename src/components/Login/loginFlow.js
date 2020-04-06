import React, { Component } from "react"
import { Row, Col, Card } from "antd"
import firebase from "firebase/app"
import "firebase/auth"
import styles from "../../styles/login.module.css"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Ignore signInSuccessUrl
    signInSuccessWithAuthResult: () => false,
  },
}
export class login extends Component {
  render() {
    return (
      <div className={styles.login}>
        <Row align="center">
          <h1>
            <b>Welcome to Footsteps</b>
          </h1>
        </Row>
        <Row align="center">
          <h2>Search 🔎 community-made 🧑‍🤝‍🧑learning paths here!</h2>
        </Row>
        <Row>
          <Col xs={24} lg={14}>
            <img
              className={styles.image}
              src={require("../../images/LoginPageImg.png")}
            />
          </Col>
          <Col xs={24} lg={10}>
            <br />
            <h3>
              A journey of a thousand miles <br />
              begins with a single footstep
            </h3>
            <p>
              <b>Start your learning journey today </b>
            </p>
            <div className={styles.container}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </Col>
        </Row>

        {/*  About footsteps */}
        <div className={styles.AboutUs}>
          <Row>
            <Col sm={24} lg={10} className={styles.AboutUsVideo}>
              <iframe
                width="130%"
                height="130%"
                src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Col>
            <Col sm={24} lg={14} className={styles.AboutDesc}>
              <h1>
                <b> About Footsteps</b> <br />
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

        {/* How footsteps work */}
        <div className={styles.working}>
          <Row>
            <Col sm={24} lg={17}>
              <h1>How footsteps work?</h1>
              <p>
                With the Footsteps app, we take a mentor/subject knowledge
                expert first approach to solve the problem. The domain experts
                save their learning journey with our app and browser extension &
                make it available for everyone else to follow. Every resource is
                called a 'footstep' (added in a chronological manner) and a
                collection of footsteps makes up a learning path. The learner
                can "fork" the learning path made by the expert and keep a track
                of his progress. The app suggests resources & keeps an updated
                list with users upvotes & collaborative filtering.
              </p>
            </Col>
            <Col sm={24} lg={7}>
              <img src={require("../../images/figuringOut.png")} />
            </Col>
            <div className={styles.Cards}>
              <br />
              <br />
              <Row gutter={16}>
                <Col lg={8}>
                  <Card
                    title="1. Decide the topic you wish to learn"
                    bordered={false}
                  >
                    onsectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </Card>
                </Col>
                <Col lg={8}>
                  <Card title="2. Lorem ipsum dolor sit amet" bordered={false}>
                    onsectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </Card>
                </Col>
                <Col lg={8}>
                  <Card title="3. Lorem ipsum dolor sit amet" bordered={false}>
                    onsectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </Card>
                </Col>
              </Row>
            </div>
          </Row>
        </div>

        {/* FAQ Section */}
        <div className={styles.FAQ}>
          <Row>
            <Col sm={24} lg={9} className={styles.FAQimg}>
              <img src={require("../../images/FAQ.png")} width={900} />
            </Col>
            <Col sm={24} lg={15} className={styles.AboutDesc}>
              <h1>
                <b>FAQ</b> <br />
              </h1>
              <b>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,{" "}
              </b>
              <br />
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut totam rem aperiam, eaque ipsa quae ab illo inventore
              <br />
              <br />
              <b>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,{" "}
              </b>
              <br />
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut totam rem aperiam, eaque ipsa quae ab illo inventore
              <br />
              <br />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default login
