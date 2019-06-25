import React from "react"
import avatarStyles from "./avatar.module.css"
export default ({ imageURL, username, name }) => {
  return (
    <section>
      <img className={avatarStyles.avatar} src={imageURL} alt={username} />
      <h3>
        {name} | {username}
      </h3>
    </section>
  )
}
