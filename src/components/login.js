import React, { Component } from "react"
import { Row, Col, Form, Icon, Input, Button } from "antd"
import firebase from "firebase/app"
import "firebase/auth"

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import styles from "../styles/login.module.css"

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => true,
  },
}

export class login extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={24} lg={14}>
            <img
              className={styles.image}
              src={require("../images/signin.png")}
              alt=""
            />
          </Col>
          <Col xs={24} lg={10}>
            <div className={styles.container}>
              <Form className="login-form">
                <Form.Item>
                  <Input
                    prefix={
                      <Icon
                        type="uswidther"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="Email ID"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    style={{ float: "right" }}
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                </Form.Item>
              </Form>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default login
