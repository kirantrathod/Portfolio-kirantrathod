import React from "react";
// import ProfileUndraw from "../../assets/undraw_Coding.svg";
import ProjectUndraw from "../../assets/undraw_Code_typing.svg";
import ProjectCard from "../ProjectCard/ProjectCard";
import Particles from "react-particles-js";
import "./Home.css";
function Home() {
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
    <div className="Home">
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
        {/* <img
          className="undraw-profile"
          src={ProfileUndraw}
          alt="profile_undraw"
        ></img> */}
        <p className="intro-header">Hey! I am Kiran Rathod.</p>
      </section>
      <section className="project-banner">
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
  );
}
export default Home;
