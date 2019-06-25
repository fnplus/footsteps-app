import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import brandLogo from "../images/brand-logo.png"
export default () => (
  <header>
    <nav>
      <img className={headerStyles.logo} src={brandLogo} />
      <ul className={headerStyles.navLinks}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about/"}>About</Link>
        </li>
        <li>
          <Link to={"/profile/"}>Profile</Link>
        </li>
        <li>
          <Link to={"/join-us/"}>Join Us</Link>
        </li>
        <li>
          <Link className="button" to={"/"}>
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
