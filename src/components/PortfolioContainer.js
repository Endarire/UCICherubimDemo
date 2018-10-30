import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import UCIDemo from "./pages/UCIDemo";
import SampleLevels from "./pages/SampleLevels";
import About from "./pages/About";
import Download from "./pages/Download";
import Contact from "./pages/Contact";

class Portfolio extends Component
{
  state =
  {
    currentPage: "Home"
  };

  handlePageChange = page =>
  {
    this.setState({ currentPage: page });
  };

  renderPage = () =>
  {
    if (this.state.currentPage === "Contact")
    {
      return <Contact />;
    }
    else if (this.state.currentPage === "UCIDemo")
    {
      return <UCIDemo />;
    }
    else if (this.state.currentPage === "SampleLevels")
    {
      return <SampleLevels />;
    }
    else if (this.state.currentPage === "About")
    {
      return <About />;
    }
    else if (this.state.currentPage === "Download")
    {
      return <Download />;
    }
    else
    {
      return <Home />;
    }
  };

  render()
  {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;