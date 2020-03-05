import React, { useState, useEffect } from "react"
import gql from "graphql-tag"
import { client } from "../apollo/client"
import Loader from "../Stateless/Layout/loader"
import Settings from "./settings"

export default function() {
  const [state, setState] = useState({
    user_id: "",
    loading: true,
    data: {},
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user_id = localStorage.getItem("userId")
      client
        .query({
          query: GET_USER_DETAILS_QUERY_APOLLO,
          variables: {
            id: user_id,
          },
        })
        .then(res => {
          const data = res.data.Users[0]
          setState({
            user_id,
            loading: false,
            data,
          })
        })
    }
  }, [])

  return <>{state.loading ? <Loader /> : <Settings data={state.data} />}</>
}

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
      twitter
      profile_pic
      skills
      username
    }
  }
`
