import { Component } from "react";

class Product extends Component {
    render() {
      return (
        <div className="product">
          <h3>{this.props.title}</h3>
          <p>{this.props.price}</p>
        </div>
      );
    }
  }

  export default Product