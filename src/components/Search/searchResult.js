import React, { Component } from "react"

import ResultPathCard from "./resultPathCard"

export class SearchResult extends Component {
  render() {
    return (
      <div>
        {this.props.result.map(path => {
          return <ResultPathCard data={path} />
        })}
      </div>
    )
  }
}

export default SearchResult
