import React, { Component } from "react"

import styles from "../styles/footer.module.css"

export class footer extends Component {
  render() {
    return (
      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          className={styles.OS_link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/fnplus/footsteps-app"
        >
          Fnplus
        </a>
      </footer>
    )
  }
}

export default footer
