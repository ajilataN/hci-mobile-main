import React from "react";
import axios from "axios";

class AddNovicaView extends React.Component {
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

  QPostNovica = () => {
    axios
      .post("http://127.0.0.1:5999/novice", {
        title: this.state.novica.title,
        slug: this.state.novica.slug,
        text: this.state.novica.text,
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
    this.props.QUpdateView({ page: "novice" });
  };

  render() {
    console.log(this.state.novica);
    return (
      <div className="card" style={{ margin: "10px" }}>
        <h3 style={{ margin: "10px" }}>Welcome {this.props.QUserName}</h3>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Title</label>
          <input
            onChange={(e) => this.QGetTextFromField(e)}
            name="title"
            type="text"
            class="form-control"
            placeholder="Title..."
          />
        </div>
        <div className="mb-3" style={{ margin: "10px" }}>
          <label className="form-label">Slug</label>
          <input
            onChange={(e) => this.QGetTextFromField(e)}
            name="slug"
            type="text"
            class="form-control"
            placeholder="Slug..."
          />
        </div>
        <div class="mb-3" style={{ margin: "10px" }}>
          <label class="form-label">Text</label>
          <textarea
            onChange={(e) => this.QGetTextFromField(e)}
            name="text"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={() => this.QPostNovica()}
          className="btn btn-primary bt"
          style={{ margin: "10px" }}
        >
          Send
        </button>
      </div>
    );
  }
}
export default AddNovicaView;
