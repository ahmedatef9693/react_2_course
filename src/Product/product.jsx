import React, { Component } from "react";

class Product extends Component {
  getClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.product.count === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center m-2">
          <div
            className="col-auto"
            style={{ width: "120px", textAlign: "center" }}
          >
            <span className={this.getClasses()}>{this.props.product.name}</span>
          </div>

          <div className="col-auto d-flex align-items-center">
            <span className={this.getClasses()}>
              {this.props.product.count}
            </span>
            <button
              onClick={() => {
                this.props.onIncrement(this.props.product);
              }}
              className="btn btn-primary btn-sm ms-2"
            >
              +
            </button>
            <button
              className="btn btn-link text-dark ms-2 p-0"
              onClick={() => {
                this.props.onDelete(this.props.product);
              }}
            >
              <i className="fa-sharp fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
