import React from "react"
import { Helmet } from "react-helmet"
import layoutStyles from "../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div>
    <Helmet>
      <meta
        name="Description"
        content="let's you make your learning path and inspire others to follow them."
      />
      <title>FootSteps</title>
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
