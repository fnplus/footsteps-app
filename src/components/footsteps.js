import React, { useState, useEffect } from "react"
import footstepStyles from "../styles/footsteps.module.css"

const Footstep = ({
  title,
  description,
  tags,
  level,
  resourceURL,
  resourceType,
}) => (
  <li>
    <a href={resourceURL}>
      {title}
      <span>[{level}]</span>
      <span>[{resourceType}]</span>
    </a>
    <p>{description}</p>
    <p>Tags: {tags.join(", ")}</p>
  </li>
)
export default ({ footsteps }) => {
  return (
    <ul>
      {footsteps.map(footstep => (
        <Footstep key={footstep.title} {...footstep} />
      ))}
    </ul>
  )
}
