import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import pdf from "./public/pdf.jpg";
import axios from "axios";
class AboutView extends Component {
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
    return (
      <div style={{ height: "100vh" }}>
        <div style={{ float: "left" }}>
          <button
            onClick={() => this.QSetViewInParent({ page: "login" })}
            className="btn btn-outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        </div>
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <h2>HELP</h2>
        </div>
        <h3 style={{ marginTop: "20px" }}>How to write a propper CV?</h3>
        <div style={{ textAlign: "center" }}>
          <UniversalButtonView
            title=<a href={"https://zety.com/blog/how-to-write-a-cv "}>
              <span>&#128279;</span>
            </a>
          />
        </div>
        <h3 style={{ marginTop: "20px" }}>
          How to write a propper Motivational letter?
        </h3>
        <div style={{ textAlign: "center" }}>
          <UniversalButtonView
            title=<a
              href={
                "https://novoresume.com/career-blog/how-to-write-a-motivation-letter"
              }
            >
              <span>&#128279;</span>
            </a>
          />
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <b>CV and Motivation letter you can attach only in pdf format:</b>
        </div>
        <div>
          <img
            src={pdf}
            style={{ maxWidth: "100px" }}
            className="w-25 rounded mx-auto d-block img-responsive"
            alt=""
          ></img>
        </div>
      </div>
    );
  }
}

export default AboutView;
