import React, { useContext } from "react";
import ProductList from "../components/ProductList";
import { Context } from "../Context";

function Product() {
  const { product } = useContext(Context);

  return (
    <div>
      {product.map((prod, i) => (
        <ProductList key={prod.id} props={prod} />
      ))}
    </div>
  );
}

export default Product;
