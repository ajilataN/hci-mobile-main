import React, { useState } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 400,
  height: 800,
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
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="rounded mx-auto d-block"
          />
        ) : (
          <img src={picture} style={{ MaxWidth: "300px", height: "300px" }} />
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
            <UniversalButtonView title={"Post"} />
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className="rounded-circle btn btn-secondary"
            >
              <span>&#128247;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
