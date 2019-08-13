import React, { Component } from "react"
import { Row, Col, Select } from "antd"
import { WithContext as ReactTags } from "react-tag-input"

import styles from "../../styles/add.module.css"

const { Option } = Select

export class addFootstep extends Component {
  state = {
    title: "",
    description: "",
    type: "",
    url: "",
    level: 0,
    tags: "",
    tags_array: [],
    icon: "",
  }

  handleInputChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value,
    })
  }

  handleTagDelete = i => {
    const { tags_array } = this.state
    this.setState({
      tags_array: tags_array.filter((_tag, index) => index !== i),
    })
  }

  handleTagAddition = tag => {
    if (this.state.tags_array.length < 10) {
      this.setState(state => ({ tags_array: [...state.tags_array, tag] }))
    }
  }

  handleTypeChange = value => {
    this.setState({
      type: value,
    })
  }

  handleLevelChange = value => {
    this.setState({
      level: value,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={24} lg={12}>
            <div className={styles.input_label}>Title</div>
            <input
              className={styles.input}
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Footsteps Title"
            />

            <div className={styles.input_label}>Description</div>
            <textarea
              className={styles.input}
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Short description of the footstep"
            />

            <div className={styles.input_label}>Resource URL</div>
            <input
              className={styles.input}
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
              placeholder="Link to the resource"
            />

            <div className={styles.input_label}>Resource Type</div>
            <Select
              placeholder="Select the resource type"
              style={{ width: 120 }}
              onChange={this.handleTypeChange}
            >
              <Option value="Website">Website</Option>
              <Option value="Documentation">Documentation</Option>
              <Option value="Video">Video</Option>
            </Select>

            <div className={styles.input_label}>Resource Level</div>
            <Select
              placeholder="Select the resource Level"
              style={{ width: 120 }}
              onChange={this.handleLevelChange}
            >
              <Option value={0}>Beginner</Option>
              <Option value={1}>Intermediate</Option>
              <Option value={2}>Expert</Option>
            </Select>
          </Col>

          <Col xs={24} lg={12}>
            <div
              className={styles.icon_container}
              style={{
                width: "100px",
                height: "100px",
              }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                src={this.state.icon}
                alt=""
              />
            </div>

            <div>
              <div className={styles.input_label}>Icon URL</div>
              <input
                className={styles.input}
                name="icon"
                value={this.state.icon}
                onChange={this.handleInputChange}
                placeholder="Icon URL"
              />
            </div>

            <div className={styles.input_label}>Tags</div>
            <ReactTags
              tags={this.state.tags_array}
              placeholder={"Enter relevant tags"}
              delimiters={[188, 13]}
              handleDelete={this.handleTagDelete}
              handleAddition={this.handleTagAddition}
              allowDragDrop={false}
              inputFieldPosition="top"
              autofocus={false}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default addFootstep
