import React, { Component } from "react"
import { Row } from "antd"

import ResultPathCard from "./resultPathCard"
import ResultFootstepCard from "./resultFootstepCard"
import styles from "../../styles/result.module.css"

export class SearchResult extends Component {
  state = {
    currPaths: [],
    currFootsteps: [],
  }

  componentDidMount() {
    this.setState({
      currFootsteps: this.props.footsteps,
      currPaths: this.props.paths,
    })
  }

  sortPathsAscending = () => {
    let { currPaths } = this.state

    let sortedArray = currPaths.sort((a, b) => {
      return (
        a.votes_aggregate.aggregate.count - b.votes_aggregate.aggregate.count
      )
    })

    this.setState({
      currPaths: sortedArray,
    })
  }

  sortPathsDescending = () => {
    let { currPaths } = this.state

    let sortedArray = currPaths.sort((a, b) => {
      return (
        a.votes_aggregate.aggregate.count + b.votes_aggregate.aggregate.count
      )
    })

    this.setState({
      currPaths: sortedArray,
    })
  }

  render() {
    return (
      <div>
        <div className={styles.resultPath}>
          <h1>Learning Paths ({this.props.paths.length})</h1>

          {this.props.paths.length !== 0 ? (
            <div>
              <div className={styles.filterCard}>
                <h4>
                  Sort by: <span style={{ marginLeft: "10px" }}> Votes </span>
                </h4>
                <div className={styles.filterArrowContainer}>
                  <img
                    className={styles.filterArrow}
                    src={require("../../images/results/up-arrow.png")}
                    alt=""
                    onClick={() => this.sortPathsAscending}
                  />{" "}
                  <img
                    className={styles.filterArrow}
                    src={require("../../images/results/down-arrow.png")}
                    alt=""
                    onClick={() => this.sortPathsDescending}
                  />{" "}
                </div>
              </div>
              {this.state.currPaths.map((path, index) => {
                return <ResultPathCard key={index} data={path} />
              })}
            </div>
          ) : (
            <div className={styles.noResults}>No Paths Found</div>
          )}
        </div>

        <div className={styles.resultFootsteps}>
          <h1>Footsteps ({this.props.footsteps.length})</h1>
          <Row>
            {this.props.footsteps.length !== 0 ? (
              this.state.currFootsteps.map((footstep, index) => {
                return <ResultFootstepCard key={index} data={footstep} />
              })
            ) : (
              <div className={styles.noResults}>No Paths Found</div>
            )}
          </Row>
        </div>
      </div>
    )
  }
}

export default SearchResult
