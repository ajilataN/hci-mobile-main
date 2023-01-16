import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import mentorme from "./public/MentorMe.png";

class MentorMeView extends Component {
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
          <img src={mentorme} alt="collabPicture" style={{ width: "100%" }} />
        </div>
        <div style={{ textAlign: "center", width: "100%", marginTop: "150px" }}>
          <h1 className="text-center">#MentorMe</h1>
        </div>
        <div style={{ width: "100%", textAlign: "center", marginTop: "100px" }}>
          <UniversalButtonView title="Get Started" />
        </div>
      </div>
    );
  }
}

export default MentorMeView;
