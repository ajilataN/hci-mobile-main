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
import Feed from "./CustomComponents/feed";
import MentorCompanies from "./CustomComponents/MentorCompanies";
import AboutMentoring from "./CustomComponents/AboutMentoring";
import Camera from "./CustomComponents/camera";

class App extends Component {
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
      case "about":
        return (
          <AboutView
            QViewFromChild={this.QSetView}
            QIDFromChild={this.QSetView}
          />
        );

      case "feed":
        return (
          <Feed QViewFromChild={this.QSetView} QIDFromChild={this.QSetView} />
        );

      case "collab":
        return <CollabView QIDFromChild={this.QSetView} />;

      case "mentor":
        return <MentorMeView QIDFromChild={this.QSetView} />;

      case "form":
        return (
          <FormView
            QIDFromChild={this.QSetView}
            QViewFromChild={this.QSetView}
          />
        );

      case "sendCollab":
        return <SendCollab QViewFromChild={this.QSetView} />;

      case "raitings":
        return (
          <RatingsView
            QIDFromChild={this.QSetView}
            QViewFromChild={this.QSetView}
          />
        );

      case "novice":
        return (
          <NoviceView
            QIDFromChild={this.QSetView}
            QViewFromChild={this.QSetView}
          />
        );

      case "addNews":
        return <AddNovicaView />;

      case "signup":
        return <SignupView />;

      case "mentorC":
        return <MentorCompanies QIDFromChild={this.QSetView} />;

      case "login":
        return (
          <LoginView
            QIDFromChild={this.QSetView}
            QViewFromChild={this.QSetView}
          />
        );

      case "novica":
        return <SingleNovicaView QViewFromChild={this.QSetView} />;

      case "aboutMentoring":
        return <AboutMentoring QViewFromChild={this.QSetView} />;

      case "camera":
        return (
          <Camera QViewFromChild={this.QSetView} QIDFromChild={this.QSetView} />
        );

      default:
        return <HomeView QIDFromChild={this.QSetView} />;
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
              zIndex: "1",
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
                      onClick={() => this.QSetView({ page: "feed" })}
                      className="nav-link "
                      href="#"
                    >
                      Feed
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
                      onClick={() => this.QSetView({ page: "mentor" })}
                      className="nav-link "
                      href="#"
                    >
                      Mentoring
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
