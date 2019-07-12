import React from "react"
import searchbarStyles from "../styles/searchbar.module.css"
export default () => (
  <div
    style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "95%",
    }}
  >
    <div className={searchbarStyles.container}>
      <input
        type="search"
        name="q"
        placeholder="Search Footsteps"
        aria-label="Search"
      />
      <div className={searchbarStyles.searchBtn}>Search</div>
    </div>
  </div>
)
