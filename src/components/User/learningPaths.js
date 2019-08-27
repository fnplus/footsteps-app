import React, { Component } from "react"

import styles from "../../styles/footsteps.module.css"

import LearningPathCard from "./learningPathCard"

export class learningPaths extends Component {
  state = {
    expand: false,
  }

  expand = () => {
    this.setState({
      expand: !this.state.expand,
    })
  }

  render() {
    const data = this.props.learning_paths

    return (
      <div className={styles.learningPathsContainer}>
        <h1 className={styles.learningPathHeading}>
          Learning Paths ({data.length})
        </h1>

        {data.length === 0 ? (
          <div className={styles.learningPathEmpty}>
            <img
              src={require("../../images/path_empty.png")}
              alt="Path Empty"
            />
            <h1>
              No Learning Paths found. <br /> Create one now!
            </h1>
          </div>
        ) : (
          ""
        )}

        {data.map((path, index) => (
          <LearningPathCard path={path} key={index} />
        ))}
      </div>
    )
  }
}

export default learningPaths
