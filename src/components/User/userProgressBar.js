import React from 'react'
import { Steps, Progress, Row, Col } from 'antd';
const { Step } = Steps;

const UserProgress = ({ data, type }) => {
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
    return (
        <div style={type === "mobile" ? { marginTop: "10px" } : {}}>
            <h3>Profile Strength</h3>
            {
                (type === "mobile") ?
                    (<>
                        <Steps
                            direction="vertical"
                            current={progressVal}>

                            <Step title="About" />
                            <Step title="Skills" />
                            <Step title="Github" />
                            <Step title="LinkedIn" />
                            <Step title="Facebook" />
                        </Steps>
                    </>) :
                    (
                        <>
                            <Steps
                                current={progressVal}
                                style={{ width: "80%" }}
                            >

                                <Step title="About" />
                                <Step title="Skills" />
                                <Step title="Github" />
                                <Step title="LinkedIn" />
                                <Step title="Facebook" />

                            </Steps>
                            <Progress
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                style={{
                                    width: "80%"
                                }}
                                percent={progressVal * 20}
                            />
                        </>
                    )
            }
        </div>
    );
}

export default UserProgress;