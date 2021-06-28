import React from "react";
import "./App.css";
import ProfileUndraw from "./assets/undraw_Profile.svg";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <div className="nav-container">
            <p>Home</p>
            <p>Projects</p>
            <p>Blogs</p>
          </div>
        </nav>
        <section className="intro-card">
          <div className="intro-container">
            <img
              className="undraw-profile"
              src={ProfileUndraw}
              alt="profile_undraw"
            ></img>
            <p className="intro-header">
              <h3>
                <strong>Hey! I am Kiran Rathod.</strong>
              </h3>
            </p>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
