import React from "react";
import "./App.css";
import Resume from "./assets/KiranRathod'CV.pdf";
import ProjectUndraw from "./assets/undraw_Code_typing.svg";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Particles from "react-particles-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Projects from "./components/Projects/Project";
// import Blogs from "./components/Blogs/Blog";
import Home from "./components/Home/Home";

function App() {
  let projectsList = [
    {
      header: "BeYou",
      description:
        "Be_You is a android chat application, which is kind of influenced by existing social networking application",
      viewProjectLink: "https://github.com/kirantrathod/Be_You",
      liveProjectLink: "",
      liveProjectLinkEnabled: true,
      techStack: "Java, XML, Firebase",
    },
    {
      header: "Movies Dekho1",
      description:
        "Be_You is a android chat application, which is kind of influenced by existing social networking application",
      viewProjectLink: "https://github.com/kirantrathod/Be_You",
      liveProjectLink: "",
      liveProjectLinkEnabled: false,
      techStack: "Java, REST API, Firebase",
    },
    {
      header: "Movies Dekho2",
      description:
        "Be_You is a android chat application, which is kind of influenced by existing social networking application",
      viewProjectLink: "https://github.com/kirantrathod/Be_You",
      liveProjectLink: "",
      liveProjectLinkEnabled: false,
      techStack: "Java, XML, Firebase",
    },
    {
      header: "Movies Dekho3",
      description:
        "Be_You is a android chat application, which is kind of influenced by existing social networking application",
      viewProjectLink: "https://github.com/kirantrathod/Be_You",
      liveProjectLink: "",
      liveProjectLinkEnabled: false,
      techStack: "Java, XML, Firebase",
    },
    {
      header: "Movies Dekho4",
      description:
        "Be_You is a android chat application, which is kind of influenced by existing social networking application",
      viewProjectLink: "https://github.com/kirantrathod/Be_You",
      liveProjectLink: "",
      liveProjectLinkEnabled: false,
      techStack: "Java, XML, Firebase",
    },
  ];

  return (
    <div className="App">
      <div>
        <nav className="navigation">
          <div className="brandname">
            <strong>&lt;kirantrathod/&gt;</strong>
          </div>
          <div className="nav-container">
            <a className="nav-link" href="#">
              Home
            </a>
            <a className="nav-link" href="#project">
              Projects
            </a>
            <a className="nav-link" href="https://blog.kirantrathod.in/">
              Blogs
            </a>
            <a className="nav-link" href={Resume}>
              Resume
            </a>
            {/* <NavLink activeClassName="nav-active" className="nav-link">
                Projects
              </NavLink>
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                href=""
              >
                Blogs
              </NavLink>
              <a className="nav-link" href={Resume}>
                Resume
              </a> */}
          </div>
        </nav>

        {/* <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="">
              <Home />
            </Route>
          </Switch> */}

        <section className="intro-section">
          <div className="particles-container">
            <Particles
              params={{
                particles: {
                  color: {
                    value: "#000000",
                  },
                  line_linked: {
                    color: {
                      value: "#000000",
                    },
                  },
                  number: {
                    value: 60,
                  },
                  size: {
                    value: 4,
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                },
              }}
            ></Particles>
          </div>
          <p className="intro-header">Hey! I am Kiran Rathod.</p>
        </section>
        <section className="project-banner" id="project">
          <div className="project-banner-container">
            <p id="project-banner-header">Projects</p>
            <img
              className="undrawProject"
              src={ProjectUndraw}
              alt="Project Banner"
            ></img>
          </div>
        </section>
        <section>
          <div className="project-wrapper">
            <div className="project-container">
              {projectsList.map(function (item) {
                return (
                  <ProjectCard
                    header={item.header}
                    description={item.description}
                    viewProjectLink={item.viewProjectLink}
                    liveProjectLink={item.liveProjectLink}
                    liveProjectLinkEnabled={item.liveProjectLinkEnabled}
                    techStack={item.techStack}
                    key={item.header}
                  ></ProjectCard>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
