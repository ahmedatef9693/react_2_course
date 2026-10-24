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

  render() {
    return (
      <div>
        <h1>Shopping Card</h1>
        {this.state.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ShoppingCard;
