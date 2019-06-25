import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Avatar from "../components/avatar"
import Footsteps from "../components/footsteps"
//http://www.mocky.io/v2/5d122c093100002ec508d1b4
export default () => {
  const [data, setData] = useState(null)
  const fetchData = async () => {
    const result = await fetch(
      "http://www.mocky.io/v2/5d122efc3100001ec508d1c4"
    )
    const resultObject = await result.json()
    console.log(resultObject)
    setData(resultObject)
  }
  useEffect(() => {
    fetchData()
  })
  if (data == null) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    )
  } else
    return (
      <Layout>
        <h1>My Profile</h1>
        <Avatar
          imageURL={data.profilePic}
          name={data.firstName}
          username={data.username}
        />
        <ul>
          {data.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
        <dl>
          <dt>Followers:</dt>
          <dd>{data.followers}</dd>
          <dt>Following:</dt>
          <dd>{data.following}</dd>
        </dl>
        <h3>Social:</h3>
        <ul>
          {Object.entries(data.social).map(([key, value]) => (
            <li>
              <strong>{key}</strong> {value}
            </li>
          ))}
        </ul>
        <h3>My Core Skills:</h3>
        <ul>
          {data.coreSkills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
        <h3>Professional Bio:</h3>
        <p>{data.bio}</p>
        <p>Your footsteps will be shown here</p>
        <Footsteps footsteps={data.footsteps} />
      </Layout>
    )
}
