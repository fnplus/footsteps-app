import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

import Header from "./header"
import Footer from "./footer"
import User from "./user"
import Loader from "./loader"

export class publicProfile extends Component {
  render() {
    return (
      <Query
        query={USERS_QUERY_APOLLO}
        variables={{ username: this.props.username }}
      >
        {({ data, loading, error }) => {
          if (loading)
            return (
              <div>
                <Header show={false} />
                <Loader />
                <Footer />
              </div>
            )
          if (error)
            return (
              <div>
                <Header show={false} />
                <h1>Error Loading User</h1>
                <Footer />
              </div>
            )
          return (
            <div>
              <Header show={false} />
              <User data={data.User[0]} />
              <Footer />
            </div>
          )
        }}
      </Query>
    )
  }
}

export default publicProfile

export const USERS_QUERY_APOLLO = gql`
  query getuser($username: String!) {
    User: Users(where: { username: { _eq: $username } }) {
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
