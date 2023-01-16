import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import pdf from "./public/pdf.jpg";
class AboutView extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h2>HELP</h2>
        </div>
        <h3 style={{ marginTop: "20px" }}>How to write a propper CV?</h3>
        <div style={{ textAlign: "center" }}>
          <UniversalButtonView title=<span>&#128279;</span> />
        </div>
        <h3 style={{ marginTop: "20px" }}>
          How to write a propper Motivational letter?
        </h3>
        <div style={{ textAlign: "center" }}>
          <UniversalButtonView title=<span>&#128279;</span> />
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <b>CV and Motivation letter you can attach only in pdf format:</b>
        </div>
        <div>
          <img
            src={pdf}
            className="w-25 rounded mx-auto d-block img-responsive"
            alt=""
          ></img>
        </div>
      </div>
    );
  }
}

export default AboutView;
