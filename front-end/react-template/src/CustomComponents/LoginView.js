import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    user: {
      type: "login";
    }
  }

  QGetTextFromField = (e) => {
    this.setState((prevState) => ({
      user: { ...prevState.user, [e.target.name]: e.target.value }
    }));
  };

  QSendUserToParent = (state) => {
    this.props.QUserFromChild(state.user);
  };

  submit = async () => {
    const toSubmit = {};
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
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

        <div class="card" style={{ marginTop: "50px", textAlign: "center" }}>
          <div class="card-header">
            <h4>
              <b>Attachments:</b>
            </h4>
          </div>

          <div class="card-body">
            <h5 class="card-title">CV</h5>
            <form>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </form>
            <h5 class="card-title" style={{ marginTop: "20px" }}>
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
          <UniversalButtonView title="Help" />{" "}
          <UniversalButtonView title="Send" />
        </div>
      </div>
    );
  }
}

export default LoginView;
