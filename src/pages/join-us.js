import React from "react"
import Layout from "../components/layout"
import { Row, Col } from "antd"
import voiceInterface from "../images/voice-interface.svg"
export default () => (
  <Layout>
    <div className="container row">
      <Row>
        <Col xs={24} lg={12}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <h1>Join Us!</h1>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button className="button" type="submit">
                Send
              </button>
            </p>
          </form>
        </Col>
        <Col xs={24} lg={12}>
          <img src={voiceInterface} width="300px" height="300px" />
        </Col>
      </Row>
    </div>
  </Layout>
)
