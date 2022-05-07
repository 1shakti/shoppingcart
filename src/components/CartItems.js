import React, { useContext } from "react";
import { Context } from "../Context";

function CartItems({ props }) {
  const { removeFromCart, cartItem } = useContext(Context);

  function cartBtn() {
    return (
      <button onClick={() => removeFromCart(props)}>Remove To Cart</button>
    );
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


export default CartItems;
