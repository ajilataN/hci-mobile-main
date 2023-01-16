import { Component } from "react";
import profile1 from "./public/profile1.jpg";
import profile2 from "./public/profile2.jpg";
import profile3 from "./public/profile3.jpg";
import coffee from "./public/coffee.jpg";
import nails from "./public/nails.png";
import makeup from "./public/makeup.jpg";

class FeedView extends Component {
  render() {
    return (
      <div style={{ height: "100%", marginTop: "50px" }}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "center" }}>
            <img
              src={profile1}
              className="float-start rounded-circle w-25 img-responsive"
              alt=""
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
        <button className="float-start sticky-bottom rounded-circle btn btn-secondary">
          &#9733;
        </button>
        <button className="float-end sticky-bottom rounded-circle btn btn-secondary">
          <span>&#128247;</span>
        </button>
      </div>
    );
  }
}

export default FeedView;
