import React, { Component } from "react"
import { Row, Col, Select } from "antd"
import { WithContext as ReactTags } from "react-tag-input"

import styles from "../../styles/add.module.css"

const { Option } = Select

export class addFootstep extends Component {
  state = {
    title: "",
    description: "",
    type: "Website",
    url: "",
    level: 0,
    tags: "",
    tags_array: [],
    icon: "https://i.imgur.com/frwNB0V.png",
  }

  updateFootstepArray = () => {
    let tags = ""

    this.state.tags_array.map((skill, i) => {
      if (i !== this.state.tags_array.length - 1) {
        tags += skill.text + ","
        return 0
      } else {
        tags += skill.text
        return 0
      }
    })

    this.setState({
      tags,
    })

    let newFootstepContent = {
      id: this.props.data.id,
      title: this.state.title,
      description: this.state.description,
      resource_type: this.state.type,
      resource_url: this.state.url,
      tags,
      learning_path: this.props.pathId,
      level: this.state.level,
      resource_icon: this.state.icon,
    }

    this.props.update(newFootstepContent)
  }

  handleInputChange = e => {
    const target = e.target
    this.setState(
      {
        [target.name]: target.value,
      },
      () => {
        this.updateFootstepArray()
      }
    )
  }

  handleTagDelete = i => {
    const { tags_array } = this.state
    this.setState(
      {
        tags_array: tags_array.filter((_tag, index) => index !== i),
      },
      () => {
        this.updateFootstepArray()
      }
    )
  }

  handleTagAddition = tag => {
    if (this.state.tags_array.length < 10) {
      this.setState(
        state => ({ tags_array: [...state.tags_array, tag] }),
        () => {
          this.updateFootstepArray()
        }
      )
    }
  }

  handleTypeChange = value => {
    this.setState(
      {
        type: value,
      },
      () => {
        this.updateFootstepArray()
      }
    )
  }

  handleLevelChange = value => {
    this.setState(
      {
        level: value,
      },
      () => {
        this.updateFootstepArray()
      }
    )
  }

  render() {
    return (
      <div className={styles.footstep_container}>
        <Row>
          <Col span={12}>
            <div className={styles.footstep_counter}>{this.props.index}</div>
          </Col>

          <Col span={12}>
            <div
              onClick={() => this.props.remove(this.props.data.id)}
              className={styles.footstep_remove_btn}
            >
              X
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} lg={14}>
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
              maxLength="80"
              placeholder="Short description of the footstep (max 80 chars)"
            />

            <div className={styles.input_label}>Resource URL</div>
            <input
              className={styles.input}
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
              placeholder="Link to the resource"
            />

            <Row>
              <Col span={12}>
                <div className={styles.input_label}>Resource Type</div>
                <Select
                  defaultValue="Website"
                  style={{
                    minWidth: 120,
                    marginTop: "10px",
                    fontFamily: "'Montserrat'",
                  }}
                  onChange={this.handleTypeChange}
                >
                  <Option value="Website">Website</Option>
                  <Option value="Documentation">Documentation</Option>
                  <Option value="Video">Video</Option>
                  <Option value="Article">Article</Option>
                  <Option value="Course">Course</Option>
                  <Option value="MOOC">MOOC</Option>
                  <Option value="Book">Book</Option>
                  <Option value="Cheat Sheet">Cheat Sheet</Option>
                  <Option value="Tool">Tool</Option>
                  <Option value="Research Paper">Research Paper</Option>
                  <Option value="Blog">Blog</Option>
                  <Option value="Quiz">Quiz</Option>
                  <Option value="Resource List">Resource List</Option>
                  <Option value="Study Plan">Study Plan</Option>
                  <Option value="Audio">Audio</Option>
                  <Option value="Lecture">Lecture</Option>
                  <Option value="Question">Question</Option>
                  <Option value="Competition">Competition</Option>
                </Select>
              </Col>
              <Col span={12}>
                <div className={styles.input_label}>Resource Level</div>
                <Select
                  defaultValue={0}
                  style={{
                    minWidth: 120,
                    marginTop: "10px",
                    fontFamily: "'Montserrat'",
                  }}
                  onChange={this.handleLevelChange}
                >
                  <Option value={0}>Beginner</Option>
                  <Option value={1}>Intermediate</Option>
                  <Option value={2}>Expert</Option>
                </Select>
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={10}>
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
