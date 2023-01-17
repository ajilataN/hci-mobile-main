import { Component } from "react";
import profile1 from "./public/profile1.jpg";
import profile2 from "./public/profile2.jpg";
import profile3 from "./public/profile3.jpg";
import coffee from "./public/coffee.jpg";
import nails from "./public/nails.png";
import makeup from "./public/makeup.jpg";
import axios from "axios";

class FeedView extends Component {
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
      <div style={{ height: "100%", marginTop: "50px" }}>
        <div style={{ float: "left", display: "block" }}>
          <button
            onClick={() => this.QSetViewInParent({ page: "home" })}
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
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        </div>
        <div className="card" style={{ width: "100%" }}>
          <div className="card-header" style={{ textAlign: "center" }}>
            <img
              src={profile1}
              className="float-start rounded-circle w-25 img-responsive"
              alt=""
              style={{ maxWidth: "150px" }}
            ></img>
            <div>
              <span style={{ fontSize: "1.5rem" }}>
                <strong>&#8982; Maria</strong>
                <div>at Tushan</div>
              </span>
            </div>
          </div>
          <div className="card-body" style={{ textAlign: "center" }}>
            <img src={coffee} className="img-fluid img-responsive" alt=""></img>
            <p className="card-text">
              <strong>Maria:</strong> Happiness is a cup of coffee and a good
              book! #womanowned
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header" style={{ textAlign: "center" }}>
            <img
              src={profile2}
              className="float-start rounded-circle w-25 img-responsive"
              alt=""
              style={{ maxWidth: "150px" }}
            ></img>
            <div>
              <span style={{ fontSize: "1.5rem" }}>
                <strong>&#8982; Sara</strong>
                <div>at LadyDi</div>
              </span>
            </div>
          </div>
          <div className="card-body" style={{ textAlign: "center" }}>
            <img src={nails} className="img-fluid img-responsive" alt=""></img>
            <p className="card-text">
              <strong>Sara: </strong>Great nails don't happen by chance.
              #womanowned
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header" style={{ textAlign: "center" }}>
            <img
              src={profile3}
              className="float-start rounded-circle w-25 img-responsive"
              alt=""
              style={{ maxWidth: "150px" }}
            ></img>
            <div>
              <span style={{ fontSize: "1.5rem" }}>
                <strong>&#8982; Berna </strong>
                <div>at Roen</div>
              </span>
            </div>
          </div>
          <div className="card-body" style={{ textAlign: "center" }}>
            <img src={makeup} className="img-fluid img-responsive" alt=""></img>
            <p className="card-text">
              <strong>Berna: </strong>Never ask a girl with winged eyeliner why
              she’s late. #roen #womanowned
            </p>
          </div>
        </div>
        <button
          onClick={() => this.QSetViewInParent({ page: "raitings" })}
          className="float-start sticky-bottom rounded-circle btn btn-secondary"
        >
          &#9733;
        </button>
        <button
          onClick={() => this.QSetViewInParent({ page: "camera" })}
          className="float-end sticky-bottom rounded-circle btn btn-secondary"
        >
          <span>&#128247;</span>
        </button>
      </div>
    );
  }
}

export default FeedView;
