import React, { Component } from "react"
import { CloudUploadOutlined } from "@ant-design/icons"
import { Row, Col, Select } from "antd"
import FileUploader from "react-firebase-file-uploader"
import firebase from "firebase/app"
import "firebase/storage"

import addStyles from "../../styles/add.module.css"

const { Option } = Select

export class editFootstep extends Component {
  state = {
    title: "",
    description: "",
    type: "Website",
    url: "",
    level: 0,
    icon: "",
    icon_url: "https://i.imgur.com/frwNB0V.png",
    isUploading: false,
    progress: 0,
  }

  componentDidMount() {
    const data = this.props.data

    if (data.title !== undefined) {
      this.setState({
        title: data.title,
        description: data.description,
        url: data.resource_url,
        icon_url: data.resource_icon,
        type: data.resource_type,
        level: data.level,
      })
    }
  }

  updateFootstepArray = () => {
    let newFootstepContent = {
      id: this.props.data.id,
      title: this.state.title,
      description: this.state.description,
      resource_type: this.state.type,
      resource_url: this.state.url,
      learning_path: this.props.pathId,
      level: this.state.level,
      resource_icon: this.state.icon_url,
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

  // Image Upload Functions

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
  handleProgress = progress => this.setState({ progress })

  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }

  handleUploadSuccess = filename => {
    this.setState({ icon: filename, progress: 100, isUploading: false })
    firebase
      .storage()
      .ref("Footsteps")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState({ icon_url: url }, () => {
          this.updateFootstepArray()
        })
      )
  }

  render() {
    return (
      <div className={addStyles.footstep_container}>
        <Row>
          <Col span={12}>
            <div className={addStyles.footstep_counter}>{this.props.index}</div>
          </Col>

          <Col span={12}>
            <div
              onClick={() => this.props.remove(this.props.data.id)}
              className={addStyles.footstep_remove_btn}
            >
              X
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={24} lg={12}>
            <div className={addStyles.input_label}>Title</div>
            <input
              className={addStyles.input}
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Footsteps Title"
            />

            <div className={addStyles.input_label}>Description</div>
            <textarea
              className={addStyles.input}
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              maxLength="80"
              placeholder="Short description of the footstep (max 80 chars) -- Optional"
            />

            <div className={addStyles.input_label}>Resource URL</div>
            <input
              className={addStyles.input}
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
              placeholder="Link to the resource"
            />
          </Col>

          <Col xs={24} lg={12}>
            <div className={addStyles.icon_container}>
              {this.state.icon_url && (
                <img src={this.state.icon_url} alt="Icon URL" />
              )}
            </div>

            <Row>
              <Col span={20}>
                <div
                  className={addStyles.input_label}
                  style={{ marginTop: "0" }}
                >
                  Icon URL
                </div>
                <input
                  style={{ width: "100%" }}
                  className={addStyles.input}
                  name="icon_url"
                  value={this.state.icon_url}
                  onChange={this.handleInputChange}
                  placeholder="Icon URL"
                />
              </Col>

              <Col span={4}>
                <label className={addStyles.add_image_btn}>
                  <CloudUploadOutlined
                    style={{ fontSize: "25px" }}
                  ></CloudUploadOutlined>
                  <FileUploader
                    hidden
                    accept="image/*"
                    name="icon"
                    randomizeFilename
                    storageRef={firebase.storage().ref("Footsteps")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className={addStyles.input_label}>Resource Type</div>
                <Select
                  value={this.state.type}
                  style={{
                    minWidth: 120,
                    marginTop: "10px",
                    fontFamily: "'Montserrat'",
                  }}
                  onChange={this.handleTypeChange}
                >
                  <Option value="Audio">Audio</Option>
                  <Option value="Blog">Blog</Option>
                  <Option value="Book">Book</Option>
                  <Option value="Cheat Sheet">Cheat Sheet</Option>
                  <Option value="Competition">Competition</Option>
                  <Option value="Course">Course</Option>
                  <Option value="Documentation">Documentation</Option>
                  <Option value="Video">Video</Option>
                  <Option value="Tool">Tool</Option>
                  <Option value="Research Paper">Research Paper</Option>
                  <Option value="Resource List">Resource List</Option>
                  <Option value="Study Plan">Study Plan</Option>
                </Select>
              </Col>
              <Col span={12}>
                <div className={addStyles.input_label}>Resource Level</div>
                <Select
                  value={this.state.level}
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
        </Row>
      </div>
    )
  }
}

export default editFootstep
