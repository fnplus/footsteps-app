import React, { Component } from "react"
import FileUploader from "react-firebase-file-uploader"
import { Row, Col } from "antd"

import firebase from "firebase/app"
import "firebase/storage"

import styles from "../../styles/add.module.css"

class AddImage extends Component {
  state = {
    image: "",
    isUploading: false,
    progress: 0,
    imageUrl: "https://image.flaticon.com/icons/svg/284/284471.svg",
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
  handleProgress = progress => this.setState({ progress })

  handleUploadError = error => {
    this.setState({ isUploading: false })
    console.error(error)
  }

  handleUploadSuccess = filename => {
    this.setState({ image: filename, progress: 100, isUploading: false })
    firebase
      .storage()
      .ref(this.props.type)
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imageUrl: url }))
  }

  render() {
    return (
      <div>
        <div className={styles.icon_container}>
          {this.state.imageUrl && <img src={this.state.imageUrl} />}
        </div>

        <div
          // className={styles.icon_input_container}
          style={{ marginTop: "35px" }}
        >
          <Row>
            <Col xs={24} lg={14}>
              <div className={styles.input_label} style={{ marginTop: "0" }}>
                Icon URL
              </div>
              <input
                style={{ width: "100%" }}
                className={styles.input}
                name="image"
                value={this.state.imageUrl}
                onChange={this.handleInputChange}
                placeholder="image URL"
              />
            </Col>

            <Col xs={24} lg={10}>
              <label className={styles.add_image_btn}>
                Upload Custom Image
                <FileUploader
                  hidden
                  accept="image/*"
                  name="image"
                  randomizeFilename
                  storageRef={firebase.storage().ref(this.props.type)}
                  onUploadStart={this.handleUploadStart}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                  onProgress={this.handleProgress}
                />
              </label>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default AddImage
