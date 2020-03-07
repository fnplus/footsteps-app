import React from 'react'
import { Steps, Progress } from 'antd';
const { Step } = Steps;

const UserProgress = ({ data }) => {
    console.log(data);
    const { about, skills, linkedin, github, facebook } = data;

    const progress = [
        about, skills, github, linkedin, facebook
    ]

    let progressVal = 0;
    for (let i = 0; i < 5; i++) {
        const ele = progress[i];
        console.log(ele);
        if (ele !== "" && ele !== "https://github.com/" && ele !== "https://linkedin.com/in/" && ele !== "https://facebook.com/")
            progressVal++;
        else
            break;
    }
    // progress.map(ele => {
    //     if (ele !== "" && ele !== "https://github.com/" && ele !== "https://linkedin.com/in/" && ele !== "https://facebook.com/")
    //         progressVal++;
    //     else
    //         return;
    // }


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