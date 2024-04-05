import React, { useState } from 'react'
import { CartContext } from './Cart-context'

const CartProvider = (props) => {

const [dummyData, setDummyData] = useState([
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity:30
  },
  {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity:20
  },
  {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity:10
  },
  {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:5,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:6,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:7,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
  {
    id:8,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 5,

  },
])
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

const addProductDetails =()=>{

}
 

const contextVal ={
    item:[],
    cartItem:cartItems,
    dummyItem: dummyData,
    onAddProductDetail:addProductDetails,
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
