import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import tushan from "./public/tushan.png";
import loggia from "./public/loggia.png";
import ladyDi from "./public/ladyDi.jpg";
import beaBru from "./public/BeaBru.png";

class NoviceView extends Component {
  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  submitMore = async () => {
    const toSubmit = {};
  };

  render() {
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ margin: "10px", marginTop: "40px" }}
      >
        <div style={{ width: "100%" }}>
          <div style={{ float: "left" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </div>
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
              <UniversalButtonView onClick={this.submitMore} title="More" />{" "}
              <UniversalButtonView title="Collaborate" />
            </span>
          </div>
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
              <UniversalButtonView title="More" />{" "}
              <UniversalButtonView title="Collaborate" />
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
              <UniversalButtonView title="Collaborate" />
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
              <UniversalButtonView title="Collaborate" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NoviceView;
