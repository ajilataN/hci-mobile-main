import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import AddPost from "../CustomComponents/AddPost";

const videoConstraints = {
  width: 400,
  height: 800,
  facingMode: "user",
  // facingMode: { exact: "environment" } for using the rear camera
};

const Profile = (props) => {
  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  //console.log(picture);

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
          <AddPost />
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
