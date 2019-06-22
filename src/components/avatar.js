import React from "react"
import avatarStyles from "./avatar.module.css"
export default ({ imageURL, username }) => {
  return (
    <section>
      <img src={imageURL} alt={username} />
      <h3>{username}</h3>
    </section>
  )
}
