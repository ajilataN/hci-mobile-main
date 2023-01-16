import { Component } from "react";
import home from "./public/homepic.png";
import Feed from "./feed";

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "none",
      novicaId: 0,
    };
  }

  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page,
      novicaId: obj.id || 0,
    });
  };

  QGetView = (state) => {
    let page = state.currentPage;
    switch (page) {
      case "feed":
        return <Feed />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          margin: "10px",
          marginTop: "70px",
          textAlign: "center",
          height: "100vh",
        }}
      >
        <div style={{ marginTop: "50px", width: "100%" }}>
          <img src={home} className="img-fluid" alt="homePicture" />
        </div>

        <div style={{ marginTop: "50px", width: "100%" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            fill="currentColor"
            className="bi bi-chevron-double-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
          <button
            onClick={() => this.QSetView({ page: "feed" })}
            className="btn btn-outline-none"
            style={{ width: "100%" }}
          >
            <p className="fw-semibold">Swipe up</p>
          </button>
        </div>

        <div id="viewer" className="row container" style={{ minWidth: "100%" }}>
          {this.QGetView(this.state)}
        </div>
      </div>
    );
  }
}

export default HomeView;
