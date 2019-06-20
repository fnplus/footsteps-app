import React from "react"
import avatarStyles from "./avatar.module.css"
export default ({ imageURL }) => {
  return (
    <section>
      <img src={imageURL} />
      <h3>Yen</h3>
    </section>
  )
}
