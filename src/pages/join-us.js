import React from "react"
import Layout from "../components/layout"
import voiceInterface from "../images/voice-interface.svg"
export default () => (
  <Layout>
    <div className="container row">
      <form name="contact" method="POST" data-netlify="true">
        <h1>Join Us!</h1>
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
      <img src={voiceInterface} width="300px" height="300px" />
    </div>
  </Layout>
)
