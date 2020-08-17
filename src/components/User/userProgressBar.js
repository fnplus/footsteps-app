import React from "react"
import { Steps, Progress } from "antd"
const { Step } = Steps

const UserProgress = ({ data, type }) => {
  const { about, skills, linkedin, github, facebook } = data

  const progress = [about, skills, github, linkedin, facebook]

  let progressVal = 0
  for (let i = 0; i < 5; i++) {
    const ele = progress[i]
    if (
      ele !== "" &&
      ele !== "https://github.com/" &&
      ele !== "https://linkedin.com/in/" &&
      ele !== "https://facebook.com/"
    )
      progressVal++
    else break
  }

  if (progressVal === 5) return <></>
  else
    return (
      <div style={type === "mobile" ? { marginTop: "10px" } : {}}>
        <h3>Profile Strength</h3>
        {type === "mobile" ? (
          <>
            <Steps direction="vertical" current={progressVal}>
              <Step title="About" />
              <Step title="Skills" />
              <Step title="Github" />
              <Step title="LinkedIn" />
              <Step title="Facebook" />
            </Steps>
          </>
        ) : (
          <>
            <Steps current={progressVal} style={{ width: "100%" }}>
              <Step title="About" />
              <Step title="Skills" />
              <Step title="Github" />
              <Step title="LinkedIn" />
              <Step title="Facebook" />
            </Steps>
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              style={{
                width: "80%",
              }}
              percent={progressVal * 20}
            />
          </>
        )}
      </div>
    )
}

export default UserProgress
