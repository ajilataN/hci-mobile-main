import { Component } from "react";
import loggia from "./public/loggia.png";
import tushan from "./public/tushan.png";
import ladyDi from "./public/ladyDi.jpg";
import beaBru from "./public/BeaBru.png";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";

class MentorCompanies extends Component {
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
        style={{ margin: "10px", marginTop: "40px" }}
      >
        <div style={{ float: "left" }}>
          <button
            onClick={() => this.QSetViewInParent({ page: "form" })}
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
        <div style={{ display: "flex", width: "100%", height: "5%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter location"
          />{" "}
          <UniversalButtonView title="Search" />
        </div>

        <div className="card">
          <div className="card-body" style={{ textAlign: "center" }}>
            <img
              src={tushan}
              className="rounded-circle w-25 img-responsive"
              alt=""
            ></img>
            <div style={{ textAlign: "center" }}>
              <h3>Tushan</h3>
              <p>
                <span>&#8982;</span> Koper
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>
              <UniversalButtonView
                onClick={() =>
                  this.QSetViewInParent({ page: "aboutMentoring" })
                }
                title="More"
              />{" "}
              <UniversalButtonView
                onClick={() => this.QSetViewInParent({ page: "login" })}
                title="Apply"
              />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-body" style={{ textAlign: "center" }}>
            <img
              src={loggia}
              className="rounded-circle w-25 img-responsive"
              alt=""
            ></img>
            <div style={{ textAlign: "center" }}>
              <h3>Golden Loggia</h3>
              <p>
                <span>&#8982;</span> Koper
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>
              <UniversalButtonView title="More" />{" "}
              <UniversalButtonView title="Apply" />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-body" style={{ textAlign: "center" }}>
            <img
              src={ladyDi}
              className="rounded-circle w-25 img-responsive"
              alt=""
            ></img>
            <div style={{ textAlign: "center" }}>
              <h3>Lady Di</h3>
              <p>
                <span>&#8982;</span> Koper
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>
              <UniversalButtonView title="More" />{" "}
              <UniversalButtonView title="Apply" />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-body" style={{ textAlign: "center" }}>
            <img
              src={beaBru}
              className="rounded-circle w-25 img-responsive"
              alt=""
            ></img>
            <div style={{ textAlign: "center" }}>
              <h3>BeaBru</h3>
              <p>
                <span>&#8982;</span> Izola
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <span>
              <UniversalButtonView title="More" />{" "}
              <UniversalButtonView title="Apply" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MentorCompanies;
