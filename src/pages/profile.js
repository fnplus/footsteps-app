import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import User from "../components/user"

export default () => {
  const [data, setData] = useState(null)
  const fetchData = async () => {
    const result = await fetch(
      "http://www.mocky.io/v2/5d28065a2c000067003ed77a"
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
