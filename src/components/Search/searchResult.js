import React, { Component } from "react"
import { Row, Select } from "antd"

import ResultPathCard from "./resultPathCard"
import ResultFootstepCard from "./resultFootstepCard"
import styles from "../../styles/result.module.css"

const { Option } = Select

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

  onSelectChange = (value) => {
    if (value === "a") {
      this.setState({
        currFootsteps: this.props.footsteps,
      })
    } else if (value === "0") {
      let tempArray = this.props.footsteps.filter(
        (footstep) => footstep.level === 0
      )
      this.setState({ currFootsteps: tempArray })
    } else if (value === "1") {
      let tempArray = this.props.footsteps.filter(
        (footstep) => footstep.level === 1
      )
      this.setState({ currFootsteps: tempArray })
    } else if (value === "2") {
      let tempArray = this.props.footsteps.filter(
        (footstep) => footstep.level === 2
      )
      this.setState({ currFootsteps: tempArray })
    }
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
                    src={require("../../images/results/upArrow.png")}
                    alt=""
                    onClick={() => this.sortPathsAscending}
                  />{" "}
                  <img
                    className={styles.filterArrow}
                    src={require("../../images/results/downArrow.png")}
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
              <div>
                <div className={styles.filterCardFootsteps}>
                  <h4>
                    Filter By: <span>Level</span>
                  </h4>
                  <Select
                    style={{ width: 150, fontFamily: "'Montserrat'" }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.onSelectChange}
                    defaultValue="a"
                  >
                    <Option value="a">All</Option>
                    <Option value="0">Beginner</Option>
                    <Option value="1">Intermediate</Option>
                    <Option value="2">Expert</Option>
                  </Select>
                </div>
                {this.state.currFootsteps.length !== 0 ? (
                  <div>
                    {this.state.currFootsteps.map((footstep, index) => {
                      return <ResultFootstepCard key={index} data={footstep} />
                    })}
                  </div>
                ) : (
                  <div className={styles.noResults}>No Footsteps Found</div>
                )}
              </div>
            ) : (
              <div className={styles.noResults}>No Footsteps Found</div>
            )}
          </Row>
        </div>
      </div>
    )
  }
}

export default SearchResult
