import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import axios from "axios";

class FormView extends Component {
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
        <div style={{ width: "100%" }}>
          <div style={{ float: "left" }}>
            <button
              onClick={() => this.QSetViewInParent({ page: "mentor" })}
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
        </div>
        <div style={{ width: "100%" }}>
          <p>What are your interests?</p>
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ backgroundColor: "#fff7f4" }}
          >
            <option selected value="DEFAULT" disabled></option>
            <option value="1">Writing</option>
            <option value="2">Blogging</option>
            <option value="3">Marketing</option>
            <option value="4">Photography</option>
            <option value="5">Travel</option>
            <option value="6">Sports</option>
            <option value="7">Yoga</option>
            <option value="8">Dance</option>
            <option value="9">Reading</option>
          </select>
        </div>
        <div style={{ width: "100%" }}>
          <p>Experience</p>
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ backgroundColor: "#fff7f4" }}
          >
            <option selected value="DEFAULT" disabled></option>
            <option value="1">None</option>
            <option value="2">1-3 years</option>
            <option value="3">3-5 years</option>
            <option value="4">6 years or more</option>
          </select>
        </div>
        <div style={{ width: "100%" }}>
          <p>Level of education</p>
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ backgroundColor: "#fff7f4" }}
          >
            <option selected value="DEFAULT" disabled></option>
            <option value="1">Primary</option>
            <option value="2">Lower secondary</option>
            <option value="3">Upper secondary</option>
            <option value="4">Tertiary education</option>
            <option value="5">Bachelor's</option>
            <option value="6">Master's</option>
            <option value="7">Doctorate</option>
          </select>
        </div>
        <div style={{ width: "100%" }}>
          <p>Performance type</p>
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ backgroundColor: "#fff7f4" }}
          >
            <option selected value="DEFAULT" disabled></option>
            <option value="1">Online</option>
            <option value="2">In person</option>
            <option value="3">Hybrid</option>
          </select>
        </div>
        <div className="col-md-6 mb-3" style={{ width: "100%" }}>
          <label for="validationTooltip03">City</label>
          <input
            type="text"
            className="form-control"
            id="validationTooltip03"
            placeholder="City"
            required
          />
          <div className="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <UniversalButtonView
            onClick={() => this.QSetViewInParent({ page: "mentorC" })}
            title="Finish"
          />
        </div>
      </div>
    );
  }
}

export default FormView;
