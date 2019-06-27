import React from "react"
import { Link } from "gatsby"
import Searchbar from "./searchbar"
import roadSign from "../images/road-sign.svg"
import landingStyles from "./landing.module.css"
export default () => (
  <div className="container row">
    <section className="container column">
      <h1>FootSteps</h1>
      <p>Learning Resource Aggregator</p>
      <Searchbar />
      <Link className="button" to={"/"}>
        Search
      </Link>
    </section>
    <img src={roadSign} width="300px" height="300px" />
  </div>
)
