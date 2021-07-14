import React from "react";
import "./App.css";
import Resume from "./assets/KiranRathod'CV.pdf";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Projects from "./components/Projects/Project";
import Blogs from "./components/Blogs/Blog";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <nav className="navigation">
            <div className="brandname">
              <strong>&lt;kirantrathod/&gt;</strong>
            </div>
            <div className="nav-container">
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                exact={true}
                to=""
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

          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
