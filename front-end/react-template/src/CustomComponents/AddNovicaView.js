import { Component } from "react";

class AddNovicaView extends Component {
  render() {
    return (
      <div style={{ height: "100vh", marginTop: "60px" }}>
        <div style={{ width: "100%" }}>
          <div style={{ float: "left" }}>
            <button className="btn btn-outline-none">
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
        <div className="card" style={{ width: "100%", marginTop: "70px" }}>
          <h3 style={{ margin: "10px" }}>Welcome user</h3>
          <div className="mb-3" style={{ margin: "10px" }}>
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title..."
            />
          </div>
          <div className="mb-3" style={{ margin: "10px" }}>
            <label className="form-label">Slug</label>
            <input type="text" className="form-control" placeholder="Slug..." />
          </div>
          <div className="mb-3" style={{ margin: "10px" }}>
            <label className="form-label">Text</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <button className="btn btn-primary bt" style={{ margin: "10px" }}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default AddNovicaView;
