import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import User from "../components/user"
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
  }, [])
  return (
    <Layout>{data == null ? <h1>Loading...</h1> : <User data={data} />}</Layout>
  )
}
