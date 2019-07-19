import React, { Component } from "react"

import LearningPaths from "../User/learningPaths"
import ResultCard from "./resultCard"

export class SearchResult extends Component {
  render() {
    return (
      <div>
        {this.props.result.map(path => {
          return <ResultCard data={path} />
        })}
      </div>
    )
  }
}

export default SearchResult
