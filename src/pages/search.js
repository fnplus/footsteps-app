import React, { Component } from "react"
import queryString from "query-string"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Layout from "../components/layout"
import LearningPaths from "../components/User/learningPaths"
import styles from "../styles/search.module.css"

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
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Search results for "{this.state.query}"
          </h1>
          <div className={styles.resultContainer}>
            <Query
              query={SEARCH_QUERY_APOLLO}
              variables={{ query: this.state.query }}
            >
              {({ data, loading, error }) => {
                if (loading) return <h1>Loading...</h1>
                if (error) return <h1>Error Loading User</h1>

                if (data) {
                  console.log(data)
                  return (
                    <div>
                      <LearningPaths learning_paths={data.Learning_Paths} />
                    </div>
                  )
                }
              }}
            </Query>
          </div>
        </div>
      </Layout>
    )
  }
}

export default search

export const SEARCH_QUERY_APOLLO = gql`
  query searchPaths($query: String!) {
    Learning_Paths(where: { title: { _similar: $query } }) {
      title
      author
      description
      footsteps {
        id
        description
        learning_path
        title
        tags
        resource_url
        resource_type
        resource_icon
        level
      }
      icon
      id
      user {
        first_name
        last_name
        id
        username
        profile_pic
      }
      votes {
        learning_path
        id
        user
      }
      votes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`
