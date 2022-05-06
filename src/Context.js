import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({children}){

    const [product, setProduct] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    const data = [{
        id: 1,
        image: "blue-tshirt",
        title: "Blue T-shirt",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "500Rs"
    },
    {
        id: 2,
        image: "red-tshirt",
        title: "red T-shirt",
        detail: "Keep ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "500Rs"
    }]

    useEffect(()=>{
        setProduct(data);
    },[]);

    function addToCart(newItem){
        setCartItem(prevItem => [...prevItem, newItem]);
    }

    function removeFromCart(id){
        setCartItem(prevItem => prevItem.filter(item => item.id !== id));
    }


    return(
        <Context.Provider  value={{
        product,   
        addToCart,
        removeFromCart,
        cartItem 
        }}>
        {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}