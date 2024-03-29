import React from "react";

export const CartContext = React.createContext({
    item:[],
    cartItem:[],
    removeCartItem:(item)=>{},
    addCartItem:()=>{}
})