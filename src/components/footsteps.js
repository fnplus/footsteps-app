import React, { Component } from "react"

export class footsteps extends Component {
  render() {
    const data = this.props.footsteps

    return <div>{data}</div>
  }
}

export default footsteps
