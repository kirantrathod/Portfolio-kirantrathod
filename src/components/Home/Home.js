/* eslint-disable jsx-a11y/anchor-is-valid */
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect, useState } from "react";
import { FiDownload, FiMoon, FiSun } from "react-icons/fi";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import Particles from "react-particles-js";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import "./Home.css";
import Angular from "../../assets/skills-icons/angular.svg";
import CSS3 from "../../assets/skills-icons/css3.svg";
import Git from "../../assets/skills-icons/git-icon.svg";
import HTML5 from "../../assets/skills-icons/html5.svg";
import Java from "../../assets/skills-icons/java-4.svg";
import REACT from "../../assets/skills-icons/react.svg";
import ProjectUndraw from "../../assets/undraw_Project.svg";
import SkillsUndraw from "../../assets/undraw_skills.svg";
import Emoji from "../Emojis/Emoji";
import Footer from "../Footer/Footer";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Helmet } from "react-helmet";
import ScrollToTop from "../Scroll-To-Top/ScrollToTop";
import ScrollButton from "../Scroll-To-Top/ScrollToTop";
function Home() {
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
      header: "Dice-Roll Game",
      description:
        "A two player game to score and win by rolling dice and avoiding score deduction conditions",
      viewProjectLink: "https://github.com/kirantrathod/Dice-Roll-Game",
      liveProjectLink: "https://www.diceroll.kirantrathod.in/",
      liveProjectLinkEnabled: true,
      techStack: "HTML5, CSS3, JavaScript",
    },
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
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Helmet>
        <title>Portfolio | Kiran Rathod</title>
      </Helmet>
      <nav className="navigation">
        <div className="brandname">
          <strong>
            {/* <a className="brandname-anchor" href="#">
              &lt;kirantrathod/&gt;
            </a> */}
            <Link
              className="brandname-anchor"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              &lt;kirantrathod/&gt;
            </Link>
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
          <Link
            activeClass="active"
            className="nav-link"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="nav-link"
            to="skill"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            className="nav-link"
            to="project"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <a className="nav-link" href="https://blog.kirantrathod.in/">
            Blogs
          </a>
        </div>
      </nav>

      <section name="home" className="intro-section">
        <div className="particles-container">
          {darkMode && (
            <Particles
              params={{
                particles: {
                  color: {
                    value: "#EEEEEE",
                  },
                  line_linked: {
                    color: {
                      value: "#EEEEEE",
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
                    value: "#6D5F6A",
                  },
                  line_linked: {
                    color: {
                      value: "#786873",
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
        <div className="intro-header">
          Hi there! <Emoji symbol="👋" label="Hello" />
          <br />
          I am Kiran Rathod
          <br />I am&nbsp;
          <ReactTypingEffect
            text={["FullStack Developer @ Accenture", "into Web Development"]}
            cursorRenderer={(cursor) => <>{cursor}</>}
            speed={100}
            eraseSpeed={100}
            eraseDelay={1000}
            typingDelay={1000}
            displayTextRenderer={(text, i) => {
              return (
                <>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return <span key={key}>{char}</span>;
                  })}
                </>
              );
            }}
          />
          {/* <br /> */}
        </div>
        <div className="intro-header-social-media-container">
          <a
            className="social-media-icon"
            href="https://www.linkedin.com/in/kirantrathod/"
          >
            {" "}
            <GrLinkedin className="social-icon"></GrLinkedin>
          </a>
          <a
            className="social-media-icon"
            href="https://github.com/kirantrathod"
          >
            {" "}
            <GrGithub className="social-icon" />
          </a>
          <a
            className="social-media-icon"
            href="mailto:kirantrathod.in@gmail.com"
          >
            <GrMail className="social-icon" />
          </a>
        </div>
        {/* <div className="intro-header-resume-container">
          <p className="para-resume">
            Resume :-&nbsp;&nbsp;
            <a
              className="resume-anchor"
              href="https://drive.google.com/file/d/1uY5zOKkTQEYJIO_Z_YgH-9Fshh3p_meh/view"
            >
              <FaGoogleDrive></FaGoogleDrive>
            </a>
          </p>
        </div> */}
      </section>
      <section name="skill" className="skill-wrapper" id="skills">
        <div className="skill-container">
          <div className="skill-header-container">
            <h3 className="skill-header">Skills</h3>
            <img
              className="undrawSkill"
              src={SkillsUndraw}
              alt="Project Banner"
            ></img>
          </div>
          <p className="skill-subpoints">
            <label className="skill-label">Languages: &nbsp;&nbsp;</label>
            <img className="skill-icons" src={HTML5} alt="HTML5"></img>
            <img className="skill-icons" src={CSS3} alt="CSS3"></img>
            <img className="skill-icons" src={Java} alt="Java"></img>
          </p>
          <br />
          <p className="skill-subpoints">
            <label className="skill-label">
              Frameworks/Others: &nbsp;&nbsp;
            </label>
            <img className="skill-icons" src={REACT} alt="React"></img>
            <img className="skill-icons" src={Angular} alt="Angular"></img>
            <img className="skill-icons" src={Git} alt="Git"></img>
          </p>
          <br />
        </div>
      </section>
      <section className="section-download-resume">
        <p>Download My Resume</p>
        <a
          className="resume-anchor"
          href="https://drive.google.com/file/d/1WbKk02vJIrV93ai1ouA9UvkJiJ7RIeB_/view?usp=sharing"
        >
          <FiDownload className="download-btn"></FiDownload>
        </a>
      </section>
      <section name="project" className="project-wrapper" id="projects">
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
      <section className="footer-section">
        <Footer className="footer"></Footer>
        {/* <NotFound></NotFound> */}
      </section>
      <ScrollButton className="scroll-to-top"></ScrollButton>
    </div>
  );
}

export default Home;
