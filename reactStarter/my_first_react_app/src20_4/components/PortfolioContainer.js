import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  changepages = () => {
    if(this.state.currentPage === "About"){
      return <About />;
    }
    if(this.state.currentPage === "Home"){
      return <Home />;
    }
    if(this.state.currentPage === "Blog"){
      return <Blog />;
    }
    if(this.state.currentPage === "Contact"){
      return <Contact />;
    }
  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
       {this.changepages()}
      </div>
    );
  }
}

export default PortfolioContainer;
