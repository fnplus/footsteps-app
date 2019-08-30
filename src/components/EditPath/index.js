import React, { Component } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../layout"
import Loader from "../loader"

export class EditPath extends Component {
  render() {
    return (
      <Query
        query={GET_PATH_INFO_QUERY_APOLLO}
        variables={{ id: this.props.pathId }}
      >
        {({ data, loading, error }) => {
          if (loading)
            return (
              <Layout>
                <Loader />
              </Layout>
            )
          if (error)
            return (
              <Layout>
                <h1>Error Loading User</h1>
              </Layout>
            )
          console.log(data)
          return (
            <Layout>
              <h1>{this.props.pathId}</h1>
            </Layout>
          )
        }}
      </Query>
    )
  }
}

export default EditPath

export const GET_PATH_INFO_QUERY_APOLLO = gql`
  query getPath($id: Int) {
    Learning_Paths(where: { id: { _eq: $id } }) {
      author
      description
      footsteps {
        description
        id
        learning_path
        level
        resource_icon
        resource_type
        resource_url
        title
      }
      icon
      id
      tags
      title
      user {
        id
      }
    }
  }
`
