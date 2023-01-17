import { Component } from "react";
import React, { useState } from "react";
import Webcam from "react-webcam";
import Profile from "./Profile";

class camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novica: [],
    };
  }

  QSetViewInParent = (obj) => {
    this.props.QViewFromChild(obj);
  };

  render() {
    return <Profile />;
  }
}

export default camera;
