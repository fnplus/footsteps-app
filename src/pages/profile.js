import React, { Component } from "react"
import Layout from "../components/layout"
import User from "../components/user"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Loader from "../components/loader"

export class profile extends Component {
  state = {
    id: "",
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      this.setState({
        id: localStorage.getItem("userId"),
      })
    }
  }

  render() {
    return (
      <Query query={USERS_QUERY_APOLLO} variables={{ id: this.state.id }}>
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
          return (
            <Layout>
              <User data={data.User} />
            </Layout>
          )
        }}
      </Query>
    )
  }
}

export default profile

export const USERS_QUERY_APOLLO = gql`
  query getuser($id: uuid!) {
    User: Users_by_pk(id: $id) {
      id
      first_name
      last_name
      username
      skills
      profile_pic
      following_aggregate {
        aggregate {
          count
        }
      }
      following {
        follower_info {
          username
          first_name
          last_name
          profile_pic
          id
        }
      }
      followers_aggregate {
        aggregate {
          count
        }
      }
      followers {
        follow_info {
          username
          profile_pic
          first_name
          last_name
          id
        }
      }
      about
      bio
      linkedin
      github
      facebook
      learning_paths {
        id
        title
        description
        icon
        votes_aggregate {
          aggregate {
            count
          }
        }
        footsteps {
          id
          resource_icon
          resource_url
          resource_type
          level
          tags
          description
        }
      }
      learning_paths_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`
