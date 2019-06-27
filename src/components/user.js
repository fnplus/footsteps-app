import React from "react"
import Footsteps from "./footsteps"
import userStyles from "./user.module.css"

export default ({ data }) => {
  return (
    <>
      <h1>My Profile</h1>
      <section className={userStyles.flexRow}>
        <section className={userStyles.flexColumn}>
          <img
            className={userStyles.avatar}
            src={data.profilePic}
            alt={data.username}
          />
          <span>
            <strong>{data.username}</strong>
          </span>
        </section>
        <section className={userStyles.flexColumn}>
          <h3>{`${data.firstName} ${data.lastName}`}</h3>
          <ul>
            {data.tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
          <h3>{data.about}</h3>
          <table>
            <tr>
              <td>Followers</td>
              <td>Following</td>
            </tr>
            <tr>
              <td>{data.followers}</td>
              <td>{data.following}</td>
            </tr>
          </table>
        </section>
        <ul className={userStyles.flexColumn}>
          {Object.entries(data.social).map(([key, value]) => (
            <li>
              <a href={value}>{key}</a>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>My Core Skills:</h3>
        <ul>
          {data.coreSkills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
        <h3>Professional Bio:</h3>
        <p>{data.bio}</p>
        <p>Your footsteps will be shown here</p>
      </section>
      <section>
        <Footsteps footsteps={data.footsteps} />
      </section>
    </>
  )
}
