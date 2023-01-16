import { Component } from "react";
import HomeView from "./CustomComponents/HomeView";
import AboutView from "./CustomComponents/AboutView";
import CollabView from "./CustomComponents/CollabView";
import AddNovicaView from "./CustomComponents/AddNovicaView";
import LoginView from "./CustomComponents/LoginView";
import NoviceView from "./CustomComponents/NoviceView";
import SignupView from "./CustomComponents/SignupView";
import SingleNovicaView from "./CustomComponents/SingleNovicaView";
import SendCollab from "./CustomComponents/SendCollab";
import MentorMeView from "./CustomComponents/MentorMeView";
import FormView from "./CustomComponents/FormView";
import RatingsView from "./CustomComponents/RatingsView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "none",
      novicaId: 0
    };
  }

  QSetView = (obj) => {
    this.setState({
      currentPage: obj.page,
      novicaId: obj.id || 0
    });
  };

  QGetView = (state) => {
    let page = state.currentPage;
    switch (page) {
      case "about":
        return <AboutView />;

      case "collab":
        return <CollabView />;

      case "menor":
        return <MentorMeView />;

      case "form":
        return <FormView />;

      case "sendCollab":
        return <SendCollab />;

      case "raitings":
        return <RatingsView />;

      case "news":
        return <NoviceView QIDFromChild={this.QSetView} />;

      case "addNews":
        return <AddNovicaView />;

      case "signup":
        return <SignupView QUserFromChild={this.QHandleUserLog} />;

      case "login":
        return <LoginView QUserFromChild={this.QHandleUserLog} />;

      case "novica":
        return <SingleNovicaView QViewFromChild={this.QSetView} />;

      default:
        return <HomeView />;
    }
  };

  QHandleUserLog = (obj) => {
    this.QSetView({ page: "home" });
  };

  render() {
    return (
      <div
        id="APP"
        className="container"
        style={{ backgroundColor: "#fff7f4", height: "100%" }}
      >
        <div id="menu" className="row">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{
              backgroundColor: "#fff7f4",
              left: "0",
              position: "fixed",
              top: "0",
              zIndex: "1"
            }}
          >
            <div className="container-fluid">
              <a
                onClick={() => this.QSetView({ page: "home" })}
                className="navbar-brand"
                href="#"
              >
                FEMPRISE
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
                      className="nav-link "
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "collab" })}
                      className="nav-link "
                      href="#"
                    >
                      Collaboration
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "menor" })}
                      className="nav-link "
                      href="#"
                    >
                      Mentoring
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "form" })}
                      className="nav-link "
                      href="#"
                    >
                      Form
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "sendCollab" })}
                      className="nav-link "
                      href="#"
                    >
                      SendCollab
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "raitings" })}
                      className="nav-link "
                      href="#"
                    >
                      Raitings
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "news" })}
                      className="nav-link "
                      href="#"
                    >
                      News
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "addNews" })}
                      className="nav-link"
                      href="#"
                    >
                      Add news
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "signup" })}
                      className="nav-link "
                      href="#"
                    >
                      Sign up
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "login" })}
                      className="nav-link "
                      href="#"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => this.QSetView({ page: "novica" })}
                      className="nav-link "
                      href="#"
                    >
                      Single Novica
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div id="viewer">{this.QGetView(this.state)}</div>
      </div>
    );
  }
}

export default App;
