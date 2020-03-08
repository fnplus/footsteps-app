import React, { Component } from "react"
import queryString from "query-string"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Layout from "../components/Layout/layout"
import SearchResult from "../components/Search/searchResult"
import Loader from "../components/Layout/loader"
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
              variables={{ query: "%" + this.state.query + "%" }}
            >
              {({ data, loading, error }) => {
                if (loading) return <Loader />
                if (error) return <h1>Error Loading Results</h1>

                if (data) {
                  if (
                    data.Learning_Paths.length !== 0 ||
                    data.Footsteps.length !== 0
                  ) {
                    return (
                      <SearchResult
                        paths={data.Learning_Paths}
                        footsteps={data.Footsteps}
                      />
                    )
                  } else {
                    return <h1>No Results Found</h1>
                  }
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
    Learning_Paths(
      where: {
        _or: [{ title: { _ilike: $query } }, { tags: { _ilike: $query } }]
        isPrivate: { _eq: false }
      }
    ) {
      title
      author
      description
      footsteps {
        id
        description
        learning_path
        title
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
    Footsteps(where: { title: { _ilike: $query } }) {
      description
      id
      learning_path
      level
      resource_icon
      resource_type
      resource_url
      title
    }
  }
`
