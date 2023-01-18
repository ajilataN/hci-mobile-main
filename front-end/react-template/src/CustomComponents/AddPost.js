import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import axios from "axios";
import Feed from "./feed";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novica: {},
    };
  }

  QGetTextFromField = (e) => {
    this.setState((prevState) => ({
      novica: { ...prevState.novica, [e.target.name]: e.target.value },
    }));
  };

  QSetViewInParent = (obj) => {
    this.props.QViewFromChild(obj);
  };

  QPostNovica = () => {
    axios
      .post("http://192.168.56.1:5999/novice", {
        text: this.state.novica.text,
        tag: this.state.novica.tag,
        location: this.state.novica.location,
        hashtag: this.state.novica.hashtag,
        pic: this.state.novica.pic,
      })
      .then((res) => {
        if (res.status != 500) {
          console.log("Succesfully inserted...");
          return;
        }
        console.log("Failed to insert...");
      })
      .catch((err) => {
        console.log(err);
      });
    //this.props.QUpdateView({ page: "feed" });
  };

  render() {
    return (
      <div className="container">
        <div className="mb-3" style={{ margin: "10px" }}>
          <textarea
            onChange={(e) => this.QGetTextFromField(e)}
            name="text"
            className="form-control"
            rows="3"
            placeholder="Add caption about your post..."
          ></textarea>
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <input
            onChange={(e) => this.QGetTextFromField(e)}
            name="tag"
            type="text"
            className="form-control"
            placeholder="@Tag people"
          />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <input
            onChange={(e) => this.QGetTextFromField(e)}
            name="location"
            type="text"
            className="form-control"
            placeholder="Add location"
          />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <input
            onChange={(e) => this.QGetTextFromField(e)}
            name="hashtag"
            type="text"
            className="form-control"
            placeholder="#hashtag"
          />
        </div>
        <button
          onClick={() => this.QPostNovica()}
          style={{ color: "white", padding: "10px", fontFamily: "Arial" }}
          className=" btn bg-danger-subtle border-dark-subtle
       border border-2 "
        >
          <a href="./feed.js">
            <b> Post</b>
          </a>
        </button>
      </div>
    );
  }
}

export default AddPost;
