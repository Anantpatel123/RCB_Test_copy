import React from "react";
import CardBody from "./CardBody.js";

class Counter extends React.Component {
  state = {
    count: 0    
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if(this.state.count > 0)
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({count: 0});
  };


  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Click Counter!</h3>
        </div>
        <CardBody 
        count={this.state.count}
        handleDecrement={this.handleDecrement}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset} />
        
      </div>
    );
  }
}

export default Counter;
