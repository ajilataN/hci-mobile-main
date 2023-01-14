import React, { useState } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const Profile = () => {
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  return (
    <div>
      <div>
        {picture == "" ? (
          <Webcam
            audio={false}
            height={800}
            ref={webcamRef}
            width={360}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} className="w-50 p-3" />
        )}
      </div>
      <div>
        {picture != "" ? (
          <div className="container">
            <div className="mb-3" style={{ margin: "10px" }}>
              <textarea
                onChange={(e) => this.QGetTextFromField(e)}
                name="text"
                className="form-control"
                rows="3"
                placeholder="Add caption about your post..."
              ></textarea>
            </div>
            <div className="mb-3" style={{ margin: "10px" }}>
              <input
                onChange={(e) => this.QGetTextFromField(e)}
                name="tag"
                type="text"
                className="form-control"
                placeholder="@Tag people"
              />
            </div>
            <div className="mb-3" style={{ margin: "10px" }}>
              <input
                onChange={(e) => this.QGetTextFromField(e)}
                name="location"
                type="text"
                className="form-control"
                placeholder="Add location"
              />
            </div>
            <div className="mb-3" style={{ margin: "10px" }}>
              <input
                onChange={(e) => this.QGetTextFromField(e)}
                name="hashtag"
                type="text"
                class="form-control"
                placeholder="#hashtag"
              />
            </div>
            <button className="btn btn-primary">Post</button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="btn btn-danger"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  );
};
export default Profile;
