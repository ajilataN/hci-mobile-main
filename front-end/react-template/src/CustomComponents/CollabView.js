import { Component } from "react";
import UniversalButtonView from "../CustomComponents/UniversalButtonView";
import collabheart from "./public/CollabHeart.png";
import women1 from "./public/Women1.png";
import women2 from "./public/Women2.png";
import axios from "axios";

class CollabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novice: [],
    };
  }

  QSetViewInParent = (obj) => {
    this.props.QIDFromChild(obj);
  };

  componentDidMount() {
    axios.get("/novice").then((res) => {
      this.setState({
        novice: res.data,
      });
      /*.catch(err=>{
          if(err){
            console.log("Error: "+err.message)
          }
        })*/
    });
  }
  render() {
    return (
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          margin: "10px",
          marginTop: "40px",
          marginLeft: "0px",
          backgroundColor: "#ffffff",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2 className="text-center">Collaboration</h2>
        </div>

        <div style={{ width: "100%", textAlign: "center" }}>
          <img
            src={collabheart}
            alt="collabPicture"
            style={{ width: "80%", maxWidth: "300px" }}
          />
        </div>

        <div style={{ width: "100%" }}>
          <div style={{ width: "35%", float: "left" }}>
            <img
              src={women1}
              className="img-fluid rounded float-start"
              alt="Women1"
            />
          </div>

          <div style={{ width: "35%", float: "right" }}>
            <img
              src={women2}
              className="img-fluid rounded float-end"
              alt="Women2"
            />
          </div>
        </div>

        <div className="select" style={{ width: "100%" }}>
          <select className="form-select" aria-label="Default select example">
            <option selected value="DEFAULT" disabled>
              Choose a field
            </option>
            <option value="1">Marketing</option>
            <option value="2">Sales</option>
            <option value="3">Finance</option>
            <option value="4">Accounting</option>
            <option value="5">Health</option>
            <option value="6">Human resources</option>
            <option value="7">Catering</option>
            <option value="8">Entrepreneurship</option>
            <option value="9">Information Systems</option>
          </select>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <UniversalButtonView
            onClick={() => this.QSetViewInParent({ page: "novice" })}
            title="Select"
          />
        </div>
      </div>
    );
  }
}

export default CollabView;
