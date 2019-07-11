import React from "react"
import { Helmet } from "react-helmet"

// eslint-disable-next-line
import styles from "../styles/layout.module.css"
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
    <div className={styles.content}>
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
)
