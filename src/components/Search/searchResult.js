import React, { Component } from "react"
import { Row } from "antd"

import ResultPathCard from "./resultPathCard"
import ResultFootstepCard from "./resultFootstepCard"

export class SearchResult extends Component {
  render() {
    return (
      <div>
        <h1>Learning Paths</h1>
        {this.props.paths.map(path => {
          return <ResultPathCard data={path} />
        })}
        <h1>Footsteps</h1>
        <Row>
          {this.props.footsteps.map(footstep => {
            return <ResultFootstepCard data={footstep} />
          })}
        </Row>
      </div>
    )
  }
}

export default SearchResult
