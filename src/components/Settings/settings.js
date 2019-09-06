import React, { Component } from "react"

export class settings extends Component {
  state = {
    first_name: "",
    last_name: "",
    about: "",
    bio: "",
    email: "",
    facebook: "",
    github: "",
    linkedin: "",
    profile_pic: "",
    skills: "",
    skills_array: [],
    username: "",
  }

  componentDidMount() {
    let data = this.props.data

    let skills_array = []

    data.skills.split(",").map(skill => {
      let skill_obj = {
        id: skill,
        text: skill,
      }

      skills_array.push(skill_obj)

      return 0
    })

    this.setState({
      first_name: data.first_name,
      last_name: data.last_name,
      about: data.about,
      bio: data.bio,
      username: data.username,
      email: data.email,
      facebook: data.facebook,
      github: data.github,
      linkedin: data.linkedin,
      skills: data.skills,
      profile_pic: data.profile_pic,
      skills_array,
    })
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
      </div>
    )
  }
}

export default settings
