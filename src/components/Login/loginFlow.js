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
            <Col sm={24} lg={16}>
              <h1>How footsteps work?</h1>
              <p>
                The internet is filled with a huge amount of resources and hence
                it becomes difficult for a person to find the right resource
                suited for his/her requirement. With footsteps, you can see the
                exact path followed by an expert to reach his/her current
                position. You can see the resources and materials that they had
                referred in a chronological order.
                <br />
                <br />
                Furthermore, footsteps can also be used as a personal progress
                tracker for an individual. It would help him/her keep track of
                the skills that he/she has acquired over time
              </p>
            </Col>
            <Col sm={24} lg={8}>
              <img src={require("../../images/figuringOut.png")} />
            </Col>
            <div className={styles.Cards}>
              <br />
              <br />
              <Row gutter={16}>
                <Col span={8} className={styles.cardDesc}>
                  <Card title=" - ONE - " bordered={false}>
                    With the Footsteps app, we take a mentor/subject knowledge
                    expert first approach to solve the problem. The domain
                    experts save their learning journey with our app & make it
                    available for everyone else to follow
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title=" - TWO -" bordered={false}>
                    Every resource is called a 'footstep' and a collection of
                    footsteps makes up a learning path. The learners can search
                    for their topic of interest in the search bar and most
                    recommended path to learn that topic shows up in the result
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="- THREE  -" bordered={false}>
                    The learner can "fork" the learning path made by the expert
                    and keep a track of his progress. The app suggests resources
                    and keeps an updated list with users upvotes & collaborative
                    filtering.
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
              <b>Is footsteps a free/paid app ?</b>
              <br />
              Footsteps is completely free
              <br />
              <br />
              <b>I am a beginner. Can I use footsteps ?</b>
              <br />
              Yes. Footsteps is benefital to people in all level (Beginners,
              Intermediate and Advanced). It is also helpful for people who are
              thinking of switching to a different tech stack
              <br />
              <br />
              <b>Is footsteps avaliable offline ?</b>
              <br />
              As off now footsteps is not avaiable offline
              <br />
              <br />
              <b>Other than footsteps web, what are the other options ?</b>
              <br />
              In addition to the website, footsteps also provides an option for
              a from extension and a flutter app
              <br />
              <br />
              <b>
                I liked the site and would love to contribute to it. How can I
                get started ?
              </b>
              <br />
              Footsteps has a vibrant community of developers. To get started
              visit{" "}
              <a href="https://github.com/fnplus/footsteps-app">
                footsteps github
              </a>
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
