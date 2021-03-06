import React, { Component } from "react";
import "./App.css";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  //Fix onclick Toggle close
  hideToggle() {
    var selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/"
                onClick={() => this.hideToggle()}
              >
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume" onClick={() => this.hideToggle()}>
                Resume
              </Link>
              <Link to="/aboutme" onClick={() => this.hideToggle()}>
                About Me
              </Link>
              <Link to="/projects" onClick={() => this.hideToggle()}>
                Projects
              </Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
