import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import axios from "axios";

class SendCollab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novica: [],
    };
  }

  QSetViewInParent = (obj) => {
    this.props.QViewFromChild(obj);
  };

  componentDidMount() {
    axios.get("/novice/" + this.props.data).then((res) => {
      this.setState({
        novica: res.data,
      });
    });
  }
  render() {
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ margin: "10px", marginTop: "40px", width: "100%" }}
      >
        <div style={{ width: "100%" }}>
          <div style={{ float: "left" }}>
            <button
              onClick={() => this.QSetViewInParent({ page: "novice" })}
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
          <div style={{ float: "right" }}>
            <UniversalButtonView
              onClick={() => this.QSetViewInParent({ page: "novice" })}
              title="Send"
            />
          </div>
        </div>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>Collaboration</h2>
        </div>
        <form>
          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </form>
        <div className="form-group" style={{ width: "100%" }}>
          <label for="exampleFormControlTextarea1">Product description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <label for="exampleFormControlTextarea1">Brand identity</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <label for="exampleFormControlTextarea1">Marketing goals</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
          <label for="inputPhoneNum" className="col-sm-2 col-form-label">
            Phone number
          </label>
          <div className="col-sm-10">
            <input
              type="phone"
              className="form-control"
              id="inputPhoneNum"
              placeholder="+386 **-***-***"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SendCollab;
