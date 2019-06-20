import React, { useState, useEffect } from "react"
import footstepStyles from "./footsteps.module.css"

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
export default () => {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const result = await fetch(
      "https://www.mocky.io/v2/5d0b464a2f00006c00e3ef3a"
    )
    const resultObject = await result.json()
    setData(resultObject)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <ul>
      {data.map(footstep => (
        <Footstep key={footstep.title} {...footstep} />
      ))}
    </ul>
  )
}
