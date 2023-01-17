import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import mentorme from "./public/MentorMe.png";
import axios from "axios";

class MentorMeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novice: [],
    };
  }

  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };
  render() {
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          margin: "10px",
          marginTop: "40px",
          marginLeft: "0px",
          backgroundColor: "#ffffff",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <img
            src={mentorme}
            alt="collabPicture"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>
        <div style={{ textAlign: "center", width: "100%", marginTop: "50px" }}>
          <h1 className="text-center">#MentorMe</h1>
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "100px" }}>
          <UniversalButtonView
            onClick={() => this.QSetViewInParent({ page: "form" })}
            title="Get Started"
          />
        </div>
      </div>
    );
  }
}

export default MentorMeView;
