import React, { Component } from "react"
import queryString from "query-string"

import Layout from "../components/layout"

export class search extends Component {
  state = {
    query: "",
  }

  componentDidMount() {
    const { q } = queryString.parse(this.props.location.search)
    this.setState({ query: q })
  }

  render() {
    return (
      <Layout>
        <h1>Search results</h1>
        <div>{this.state.query}</div>
      </Layout>
    )
  }
}

export default search
