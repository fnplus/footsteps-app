import React, { Component } from 'react'
import { Steps, Progress } from 'antd';
const { Step } = Steps;

const UserProgress = ({ data }) => {
    console.log(data);
    const { about, skills, linkedin, github, facebook } = data;

    const progress = [
        about, skills, linkedin, github, facebook
    ]

    let progressVal = 0;
    progress.map(ele => {
        if (ele !== "" && ele !== "https://github.com/" && ele !== "https://linkedin.com/in/" && ele !== "https://facebook.com/")
            progressVal++;
        else
            return;
    }

    )
    return (
        <div>

            <h3>Profile Strength</h3>
            <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={progressVal * 20}
            />
            <Steps
                current={progressVal}>

                <Step title="About" />
                <Step title="Skills" />
                <Step title="Github" />
                <Step title="LinkedIn" />
                <Step title="Facebook" />

            </Steps>
        </div>
    );
}

export default UserProgress;