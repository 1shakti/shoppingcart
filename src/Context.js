import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  // const data = [
  //   {
  //     id: 1,
  //     image: "bluetshirt.png",
  //     title: "Blue T-shirt",
  //     detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: "500Rs"
  //   },
  //   {
  //     id: 2,
  //     image: "redtshirt.png",
  //     title: "red T-shirt",
  //     detail: "Keep ipsum dolor sit amet, consectetur adipiscing elit.",
  //     price: "500Rs"
  //   }
  // ];

  const productData = () => {
    fetch("http://localhost/product_api/databaseapicall.php")
    .then(Response => Response.json())
    .then(data => setProduct(data))
  }

  useEffect(() => {
    productData();
  }, []);

  function addToCart(newItem) {
    setCartItem((prevItem) => [...prevItem, newItem]);
    setProduct((prevItem) => prevItem.filter((item) => item.id !== newItem.id));
  }

  function removeFromCart(remitem) {
    setCartItem((prevItem) =>
      prevItem.filter((item) => item.id !== remitem.id)
    );
    setProduct((prevItem) => [...prevItem, remitem]);
  }

  return (
    <Context.Provider
      value={{
        product,
        addToCart,
        removeFromCart,
        cartItem
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
