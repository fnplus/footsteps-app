import React from "react"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Footsteps from "../components/footsteps"
export default () => (
  <Layout>
    <h1>My Profile</h1>
    <Avatar imageURL="https://i.pinimg.com/originals/f8/81/ad/f881ad3599045e1cfe66804f719b5c4d.jpg" />
    <p>Your footsteps will be shown here</p>
    <Footsteps />
  </Layout>
)
