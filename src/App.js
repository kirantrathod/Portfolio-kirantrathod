import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import Resume from "./assets/KiranRathod'CV.pdf";
import Blogs from "./components/Blogs/Blog";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Project";
function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <div className="brandname">
          <strong>&lt;kirantrathod&gt;</strong>
        </div>
        <div className="nav-container">
          <NavLink
            activeClassName="nav-active"
            className="nav-link"
            exact={true}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="nav-active"
            className="nav-link"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="nav-active"
            className="nav-link"
            to="/blogs"
          >
            Blogs
          </NavLink>
          <a className="nav-link" href={Resume}>
            Resume
          </a>
        </div>
      </nav>

      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/blogs" component={Blogs}></Route>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App;
