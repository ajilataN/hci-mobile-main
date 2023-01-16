import { Component } from "react";
import loggia from "./public/loggia.png";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";

class SingleNovicaView extends Component {
  QSetViewInParent = (obj) => {
    this.props.QViewFromChild(obj);
  };
  render() {
    return (
      <div>
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
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Golden Loggia</h2>
          <span>&#8982;</span> Koper
          <div>
            <img
              src={loggia}
              className="rounded-circle w-25 img-responsive"
              alt=""
            ></img>
          </div>
          <div>COFFEE BOUTIQUE, BRUNCH-BAR, WINE BAR.</div>
          <div>INSPIRATIONAL & CULTURAL MEETING PLACE</div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h2>At Loggia...</h2>
          <div>
            For coffee at Loggia You know what they say: "The light of the day
            is known after the morning coffee." We took this task very
            seriously.
          </div>
          <div>
            It's always time for tea Tea is pure magic that calms you down and
            inspires you to leave your everyday routine behind. How nice it
            would be to eat a nutritious, vitamin-filled and tasty meal early in
            the morning... We have made it possible.
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Value proposition</h2>
          <blockquote class="blockquote mb-0">
            "Golden Loggia where the little joys of life matter as much as the
            biggest ones!"
          </blockquote>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h2>Contact</h2>
          <div>info@loggia-koper.com</div>
        </div>
        <div>
          <UniversalButtonView title="Collaborate" />
        </div>
      </div>
    );
  }
}

export default SingleNovicaView;
