import React, { useContext } from "react";
import { Context } from "../Context";

export default function ProductList({props}){
    
    const {addToCart, removeFromCart, cartItem} = useContext(Context);
    

    function cartBtn(){
        const alreadyInCart = cartItem.some(item => item.id === props.id);
        if(alreadyInCart){
            return <button onClick={() => removeFromCart(props.id)}>Remove From Cart</button>
        }else{
            return <button onClick={() => addToCart(props)}>Add To Cart</button>
        }
        
    }


    return(
        <div>
            <div className="product-image">
                <img src={props.image} alt="" />   
            </div>
            <div className="product-details">
                <h4>{props.title}</h4>
                <p>{props.detail}</p>
            </div>
            <div className="product-price">
                {props.price}
            </div>
            {cartBtn()}
        </div>
    )
}