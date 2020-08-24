import React, { Component } from "react"
import { Helmet } from "react-helmet"
import gql from "graphql-tag"
import { navigate } from "gatsby"

import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "../../firebase/config"

import styles from "../../styles/layout.module.css"
import "antd/dist/antd.css"

import Header from "./sideDrawer"
import Footer from "./footer"
import Login from "../Login/loginFlow"
import Loader from "./loader"
import SignUp from "../Login/signUpFlow"

import SEO from "../SEO"

import { client } from "../../apollo/client"

import UserContext from "../../context/userContext"

export class layout extends Component {
  state = {
    isSignedIn: null,
    userId: "",
    user: {},
    signUp: false,
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        client
          .query({
            query: USER_EMAIL_QUERY_APOLLO,
            variables: {
              email: firebase.auth().currentUser.email,
            },
          })
          .then((response) => {
            if (response.data.Users.length === 0) {
              this.setState({ isSignedIn: false, signUp: true })
            } else {
              this.setState({
                isSignedIn: true,
                userId: response.data.Users[0].id,
                user: response.data.Users[0],
              })
              if (typeof window !== "undefined") {
                localStorage.setItem("userId", response.data.Users[0].id)
              }
            }
          })
      } else {
        this.setState({ isSignedIn: false })
      }
    })
  }

  updateUser = (newUser) => {
    this.setState({
      user: newUser,
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  updateUserId = (userId, isSignedIn) => {
    navigate("/")
    if (typeof window !== "undefined") {
      window.location.reload()
      localStorage.setItem("userId", userId)
    }
    this.setState({ userId: userId, isSignedIn: isSignedIn })
  }

  render() {
    return (
      <>
        <SEO />
        <Helmet>
          <html lang="en-us" />
          <meta charset="utf-8" />
          <link hrefLang="en-us" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://www.footsteps.dev" />
          <meta
            name="keywords"
            content="crowdsourced, learning paths, experts, best learning resources, find mentors, learn online, learn for free, footsteps, learning journey, fnplus, fnplus club, fnplus tech community"
          />
          <script type="application/ld+json">
            {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "url": "https://www.footsteps.dev",
                  "name": "Footsteps App",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hellofnplus@gmail.com",
                    "contactType": "Customer Support"
                  }
                }
              `}
          </script>
        </Helmet>

        <div>
          {this.state.isSignedIn === null ? (
            <div className={styles.content}>
              <Header show={false} user={this.state.user} />
              <Loader />
            </div>
          ) : this.state.isSignedIn === false ? (
            <>
              <div className={styles.content}>
                <Header show={false} user={this.state.user} />
                {!this.state.signUp ? (
                  <Login />
                ) : (
                  <SignUp updateUserId={this.updateUserId} />
                )}
              </div>
              <Footer />
            </>
          ) : (
            <UserContext.Provider
              value={{ user: this.state.user, update_user: this.update_user }}
            >
              <div className={styles.content}>
                <Header show />
                <main>{this.props.children}</main>
              </div>
            </UserContext.Provider>
          )}
        </div>
      </>
    )
  }
}

export default layout

export const USER_EMAIL_QUERY_APOLLO = gql`
  query getUser($email: String!) {
    Users(where: { email: { _like: $email } }) {
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
      twitter
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
          title
          resource_icon
          resource_url
          resource_type
          level
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
