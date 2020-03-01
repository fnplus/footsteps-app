import React, { Component } from "react"
import searchbarStyles from "../../styles/searchbar.module.css"
import { navigate } from "gatsby"

export class searchbar extends Component {
  state = {
    query: "",
    error: false,
  }

  updateQuery = e => {
    this.setState({
      query: e.target.value,
      error: false,
    })
  }

  pressEnter = e => {
    if (e.key === "Enter") {
      this.performSearch()
    }
  }

  performSearch() {
    let currentQuery = this.state.query;
    const query = currentQuery.toLowerCase();
    this.setState({ query });
    if (this.state.query.length === 0) {
      this.setState({
        error: true,
      })
    } else {
      navigate(`/search?q=${this.state.query}`)
    }
  }

  render() {
    return (
      <div
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "95%",
        }}
      >
        <div className={searchbarStyles.container}>
          <input
            type="search"
            name="q"
            placeholder="Search learning paths"
            label="Search"
            onChange={this.updateQuery}
            onKeyDown={this.pressEnter}
          />
          <div
            className={searchbarStyles.searchBtn}
            onClick={this.performSearch.bind(this)}
          >
            Search
          </div>
        </div>
        <p
          style={this.state.error ? { display: "block" } : { display: "none" }}
          className={searchbarStyles.errorText}
        >
          Please Enter a Query
        </p>
      </div>
    )
  }
}

export default searchbar
