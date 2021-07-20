/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import Resume from "./assets/KiranRathod'CV.pdf";
import ProjectUndraw from "./assets/undraw_Project.svg";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FiSun, FiMoon } from "react-icons/fi";
import Emoji from "./components/Emojis/Emoji";
import { FaGoogleDrive } from "react-icons/fa";
function App() {
  //Dark Mode Code
  let storedDarkMode = localStorage.getItem("DARK_MODE");
  storedDarkMode =
    storedDarkMode === null ? false : storedDarkMode === "false" ? false : true;
  // storedDarkMode = storedDarkMode ? storedDarkMode : false;
  console.log(" typeof Stored darkmode: " + typeof storedDarkMode);
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
    console.log(`Is in dark mode? ${darkMode}`);
  }, [darkMode]);

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
  let hashURL = window.location.hash;
  let isAtHome = hashURL === "" ? true : false;
  let isAtProject = hashURL === "#projects" ? true : false;
  let isAtSkill = hashURL === "#skills" ? true : false;
  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <nav className="navigation">
        <div className="brandname">
          <strong>
            <a className="brandname-anchor" href="#">
              &lt;kirantrathod/&gt;
            </a>
          </strong>
          <button className="darkmode-toggle-Btn" onClick={toggleDarkMode}>
            {darkMode ? (
              <FiSun title="Enable light mode" className="sun-icon" />
            ) : (
              <FiMoon title="Enable dark mode" className="moon-icon" />
            )}
          </button>
        </div>
        <div className="nav-container">
          <a className={isAtHome ? "nav-link nav-active" : "nav-link"} href="#">
            Home
          </a>
          <a
            className={isAtSkill ? "nav-link nav-active" : "nav-link"}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={isAtProject ? "nav-link nav-active" : "nav-link"}
            href="#projects"
          >
            Projects
          </a>
          <a className="nav-link" href="https://blog.kirantrathod.in/">
            Blogs
          </a>
        </div>
      </nav>

      <section className="intro-section">
        <div className="particles-container">
          {darkMode && (
            <Particles
              params={{
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  line_linked: {
                    color: {
                      value: "#ffffff",
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
          )}
          {!darkMode && (
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
          )}
        </div>
        <p className="intro-header">
          Hi there! <Emoji symbol="👋" label="Hello" />
          <br /> I am Kiran Rathod.
          <br />
          {/*I am Web Developer comes here */}
        </p>
        <p className="intro-header-resume">
          Resume :-&nbsp;&nbsp;
          <a
            className="resume-anchor"
            href="https://drive.google.com/file/d/1uY5zOKkTQEYJIO_Z_YgH-9Fshh3p_meh/view"
          >
            <FaGoogleDrive></FaGoogleDrive>
          </a>
        </p>
      </section>
      <section className="skill-wrapper" id="skills">
        <div className="skill-container">
          <h3 className="skill-header">Skills</h3>
          <p className="skill-subpoints">
            <label className="skill-label">Languages: &nbsp;&nbsp;</label>HTML5,
            CSS3, JavaScript, Java,
          </p>
          <br />
          <p className="skill-subpoints">
            <label className="skill-label">
              Frameworks/Others: &nbsp;&nbsp;
            </label>
            React.js, Angular 11, Spring Boot, Git
          </p>
          <br />
        </div>

        {/* <div className="project-banner-container">
          <p id="project-banner-header">Projects</p>
          <img
            className="undrawProject"
            src={ProjectUndraw}
            alt="Project Banner"
          ></img>
        </div> */}
        {/* <p id="project-arrow">&#10225;</p> */}
      </section>
      <section className="project-wrapper" id="projects">
        <div className="project-banner-container">
          <p id="project-banner-header">Projects</p>
          <img
            className="undrawProject"
            src={ProjectUndraw}
            alt="Project Banner"
          ></img>
        </div>
        <div className="project-inner-wrapper">
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
  );
}

export default App;
