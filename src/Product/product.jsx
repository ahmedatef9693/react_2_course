import React, { Component } from "react";

class Product extends Component {
  state = {
    name: "Burger",
    count: 3,
    imgUrl: "logo192.png",
    names: ["Ahmed", "Ali", "Hassan"],
  };
  getClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  render() {
    return (
      <div>
        {this.state.names.length === 0 && <h2>There are no names</h2>}
        <ul className="h5">
          {this.state.names.map((name) => (
            <li key={name} className={this.getClasses()}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Product;
