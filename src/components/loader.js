import React, { Component } from "react"

import "../styles/loader.css"

export class loader extends Component {
  render() {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default loader
