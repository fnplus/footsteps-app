import React, { Component } from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { navigate } from "gatsby"

import Layout from "../Layout/layout"
import Loader from "../Layout/loader"
import EditPath from "./editPath"

export class index extends Component {
  state = {
    user_id: "",
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({
        user_id: localStorage.getItem("userId"),
      })
    }
  }
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
          if (data) {
            if (this.state.user_id === "") {
              return (
                <Layout>
                  <Loader />
                </Layout>
              )
            } else {
              if (data.Learning_Paths[0].author === this.state.user_id) {
                return (
                  <Layout>
                    <EditPath data={data.Learning_Paths[0]} />
                  </Layout>
                )
              } else {
                return <Layout>{navigate("/")}</Layout>
              }
            }
          }
        }}
      </Query>
    )
  }
}

export default index

export const GET_PATH_INFO_QUERY_APOLLO = gql`
  query getPath($id: Int) {
    Learning_Paths(where: { id: { _eq: $id } }) {
      author
      description
      isPrivate
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
