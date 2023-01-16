import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import tushan from "./public/tushan.png";
import loggia from "./public/loggia.png";
import ladyDi from "./public/ladyDi.jpg";
import beaBru from "./public/BeaBru.png";

class mentoringCompaniesView extends Component {
  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  render() {
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ margin: "10px", marginTop: "40px" }}
      >
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
              <UniversalButtonView title="Apply" />
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

export default mentoringCompaniesView;
