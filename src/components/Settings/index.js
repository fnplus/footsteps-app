import React, { Component } from "react"
import gql from "graphql-tag"

import { client } from "../../apollo/client"

import Loader from "../loader"
import Settings from "./settings"

export class index extends Component {
  state = {
    user_id: "",
    loading: true,
    data: {},
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      this.setState(
        {
          user_id: localStorage.getItem("userId"),
        },
        () => {
          client
            .query({
              query: GET_USER_DETAILS_QUERY_APOLLO,
              variables: {
                id: this.state.user_id,
              },
            })
            .then(res => {
              const data = res.data.Users[0]
              this.setState({
                loading: false,
                data,
              })
            })
        }
      )
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? <Loader /> : null}
        {!this.state.loading ? <Settings data={this.state.data} /> : null}
      </>
    )
  }
}

export default index

export const GET_USER_DETAILS_QUERY_APOLLO = gql`
  query get_user_details($id: uuid!) {
    Users(where: { id: { _eq: $id } }) {
      id
      about
      bio
      email
      facebook
      first_name
      github
      last_name
      linkedin
      profile_pic
      skills
      username
    }
  }
`
