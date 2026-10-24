import React, { Component } from "react";

class Product extends Component {
  state = {
    name: this.props.product.name,
    count: this.props.product.count,
  };
  getClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getClasses()}>{this.state.name}</span>
        <span className={this.getClasses()}>{this.state.count}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm"
        >
          +
        </button>
      </div>
    );
  }
}

export default Product;
