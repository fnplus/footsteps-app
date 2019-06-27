import React from "react"
import Footsteps from "./footsteps"
import userStyles from "./user.module.css"

export default ({ data }) => {
  return (
    <div className={userStyles.flexColumn}>
      <h1>My Profile</h1>
      <section className={userStyles.flexRow}>
        <div className={userStyles.flexColumn}>
          <img
            className={userStyles.avatar}
            src={data.profilePic}
            alt={data.username}
          />
          <span>
            <strong>{data.username}</strong>
          </span>
          <ul className={userStyles.flexRow}>
            {Object.entries(data.social).map(([key, value]) => (
              <li>
                <a href={value}>{key}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={userStyles.flexColumn}>
          <h3>{`${data.firstName} ${data.lastName}`}</h3>
          <ul className={userStyles.flexRow}>
            {data.tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
          <h3>{data.about}</h3>
          <table align="center" border="0">
            <tr>
              <td>Followers</td>
              <td>Following</td>
            </tr>
            <tr>
              <td>{data.followers}</td>
              <td>{data.following}</td>
            </tr>
          </table>
        </div>
      </section>
      <section>
        <h3>My Core Skills:</h3>
        <ul className={userStyles.flexRow}>
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
    </div>
  )
}
