import React, { useContext, useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Context } from "../Context";

function Product(){
    const {product} = useContext(Context);

    return(

       <div>
           <header>
               <h1>My Product</h1>
           </header>
           {product.map((prod,i) => <ProductList key = {prod.id} props = { prod } /> )}
       </div> 
   
   ) 
}

export default Product;