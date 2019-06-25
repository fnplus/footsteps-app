import React from "react"
import avatarStyles from "./avatar.module.css"
export default ({ imageURL, username }) => {
  return (
    <section>
      <img className={avatarStyles.avatar} src={imageURL} alt={username} />
      <h3>{username}</h3>
    </section>
  )
}
