import Product from "../Product/product";
import React, { Component } from "react";

class ShoppingCard extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Burger",
        count: 3,
      },
      {
        id: 2,
        name: "Fries",
        count: 4,
      },
      {
        id: 3,
        name: "Soda",
        count: 6,
      },
    ],
  };
  handleDelete = (product) => {
    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products });
  };
  handleIncrement = (product) => {
    let products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].count++;
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Shopping Card</h1>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ShoppingCard;
