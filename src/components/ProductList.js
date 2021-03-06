import React, { useContext } from "react";
import "../styles.css";
import { Context } from "../Context";

export default function ProductList({ props }) {
  const { addToCart } = useContext(Context);

  function cartBtn() {
    return <button onClick={() => addToCart(props)}>Add To Cart</button>;
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={`./images/${props.image}`} alt="" />
      </div>
      <div className="product-details">
        <h4>{props.title}</h4>
        <p>{props.detail}</p>
      </div>
      <div className="product-price">{props.price}</div>
      {cartBtn()}
    </div>
  );
}
