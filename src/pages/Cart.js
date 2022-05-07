import React, { useContext } from "react";
import CartItems from "../components/CartItems";
import { Context } from "../Context";

function Cart() {
  const { cartItem } = useContext(Context);

  return (
    <div>
      {cartItem.map((item, i) => (
        <CartItems key={item.id} props={item} />
      ))}
    </div>
  );
}

export default Cart;
