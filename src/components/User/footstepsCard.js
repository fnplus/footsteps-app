import React, { Component } from "react"

import styles from "../../styles/footsteps.module.css"

export class footstepsCard extends Component {
  render() {
    const data = this.props.footstep

    return (
      <div className={styles.cardContainer}>
        <img className={styles.icon} src={data.resourceIcon} alt="" />
        <div>{data.title}</div>
      </div>
    )
  }
}

export default footstepsCard
