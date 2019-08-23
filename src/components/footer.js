import React, { Component } from "react"

import styles from "../styles/footer.module.css"

export class footer extends Component {
  render() {
    return (
      <footer>
        Made with ❤️ by{" "}
        <a
          className={styles.OS_link}
          target="_blank"
          href="https://github.com/fnplus/footsteps-app"
        >
          Fnplus
        </a>
      </footer>
    )
  }
}

export default footer
