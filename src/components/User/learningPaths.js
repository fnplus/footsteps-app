import React, { Component } from "react"

import styles from "../../styles/footsteps.module.css"

import LearningPathCard from "./learningPathCard"

export class learningPaths extends Component {
  state = {
    show_edit: false,
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      if (localStorage.getItem("userId") === this.props.user_id) {
        console.log("match")
        this.setState(oldState => ({
          show_edit: !oldState.show_edit,
        }))
      }
    }
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
          <LearningPathCard
            path={path}
            key={index}
            show_edit={this.state.show_edit}
          />
        ))}
      </div>
    )
  }
}

export default learningPaths
