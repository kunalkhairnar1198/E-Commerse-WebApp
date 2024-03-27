import React, { useState } from 'react'
import { CartContext } from './Cart-context'

const CartProvider = (props) => {
const [cartItems, setCartItems]= useState([ 
// {
//   title: "Colors",
//   price: 100,
//   imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   quantity: 2,
// },
// {
//   title: "Black and white Colors",
//   price: 50,
//   imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//   quantity: 3,
// },
// {
//   title: "Yellow and Black Colors",
//   price: 70,
//   imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//   quantity: 1,
// },
])

// const [removeCartItem, setRemoveItem]=useState('')
 
const addToCartItemshandler=(item)=>{
  const updatedItem = {
    ...item,
    id: Math.random().toString(),
  };
  setCartItems((prevCartItems) => {
    const updatedCartItems = [...prevCartItems, updatedItem];
    return updatedCartItems;
  });
  // console.log(item)
}

const removeCartHandler=(itemid)=>{
const updateRemainItem = cartItems.filter((item, index)=> itemid !== index)
setCartItems(updateRemainItem)
}
 

const contextVal ={
    item:[],
    cartItem:cartItems,
    addCartItem:addToCartItemshandler,
    removeCartItem:removeCartHandler,
}
// console.log(contextVal,contextVal.isCart)

  return (
    <CartContext.Provider value={contextVal}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
