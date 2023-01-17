import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import axios from "axios";

class LoginView extends Component {
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
      <div style={{ marginTop: "50px" }}>
        <div style={{ width: "100%" }}>
          <div style={{ float: "left" }}>
            <button
              onClick={() => this.QSetViewInParent({ page: "mentorC" })}
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
        <h3 style={{ textAlign: "center" }}>APPLICATION</h3>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>
          Join Tushan family
        </h2>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          We are happy to see that you are interested in our work.
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          We are kindly inviting you to let us know about yourself and become a
          part of our large family!
        </div>

        <div
          className="card"
          style={{ marginTop: "50px", textAlign: "center" }}
        >
          <div className="card-header">
            <h4>
              <b>Attachments:</b>
            </h4>
          </div>

          <div className="card-body">
            <h5 className="card-title">CV</h5>
            <form>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </form>
            <h5 className="card-title" style={{ marginTop: "20px" }}>
              Motivational letter
            </h5>
            <form>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </form>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <UniversalButtonView
            onClick={() => this.QSetViewInParent({ page: "about" })}
            title="Help"
          />{" "}
          <UniversalButtonView
            onClick={() => this.QSetViewInParent({ page: "mentorC" })}
            title="Send"
          />
        </div>
      </div>
    );
  }
}

export default LoginView;
