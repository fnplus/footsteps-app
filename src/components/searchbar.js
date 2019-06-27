import React from "react"
import searchbarStyles from "./searchbar.module.css"
export default () => (
  <div className={searchbarStyles.container}>
    <input
      type="search"
      name="q"
      placeholder="Search Footsteps"
      aria-label="Search"
    />
    <select>
      <option>All</option>
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>
  </div>
)
