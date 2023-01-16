import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";

class SendCollab extends Component {
  render() {
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ margin: "10px", marginTop: "40px", width: "100%" }}
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
          <div style={{ float: "right" }}>
            <UniversalButtonView title="Send" />
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
        <div class="form-group" style={{ width: "100%" }}>
          <label for="exampleFormControlTextarea1">Product description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group" style={{ width: "100%" }}>
          <label for="exampleFormControlTextarea1">Brand identity</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group" style={{ width: "100%" }}>
          <label for="exampleFormControlTextarea1">Marketing goals</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group" style={{ width: "100%" }}>
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
          <label for="inputPhoneNum" class="col-sm-2 col-form-label">
            Phone number
          </label>
          <div class="col-sm-10">
            <input
              type="phone"
              class="form-control"
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
