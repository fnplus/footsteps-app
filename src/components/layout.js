import React from "react"
import layoutStyles from "./layout.module.css"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div className={layoutStyles.layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
