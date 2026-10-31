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
      <div className="container">
        <div className="row justify-content-center align-items-center m-2">
          <div
            className="col-auto"
            style={{ width: "120px", textAlign: "center" }}
          >
            <span className={this.getClasses()}>{this.state.name}</span>
          </div>

          <div className="col-auto d-flex align-items-center">
            <span className={this.getClasses()}>{this.state.count}</span>
            <button
              onClick={this.handleIncrement}
              className="btn btn-primary btn-sm ms-2"
            >
              +
            </button>
            <button className="btn btn-link text-dark ms-2 p-0">
              <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
