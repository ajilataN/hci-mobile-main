import React from "react";
import HomeView from "./CustomComponents/HomeView";
import AboutView from "./CustomComponents/AboutView";
import NoviceView from "./CustomComponents/NoviceView";
import AddNovicaView from "./CustomComponents/AddNovicaView";
import SingleNovicaView from "./CustomComponents/SingleNovicaView";
import Profile from "./CustomComponents/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:"home",
      novica:1,
    };
  }
  QGetView = (state) => {
    let page = state.currentPage;

    switch (page) {
      case "about":
        return <AboutView />;
      case "novice":
        return <NoviceView QUpdateView={this.QSetView} />;
      case "addnew":
        return <AddNovicaView QUpdateView={this.QSetView}/>;
      case "novica":
        return <SingleNovicaView id={state.novica} QUpdateView={this.QSetView}/>;
      default:
        return <HomeView />;

    }
  };

  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page,
      novica: obj.id || 0
    });
  };

  render() {
    console.log(this.state)
    return (
      <div id="APP" className="container">
        <div id="menu" className="row">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <a
                onClick={() => this.QSetView({ page: "home" })}
                className="navbar-brand"
                href="#"
              >
                Home
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "about" })}
                      className="navbar-brand"
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "novice" })}
                      className="navbar-brand"
                      href="#"
                    >
                      News
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "addnew" })}
                      className="navbar-brand"
                      href="#"
                    >
                      Add news
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Profile/>
        <div id="viewer" className="row container">
    
          {this.QGetView(this.state)}
        </div>
      </div>
    );
  }
}
export default App;
