import {  useState } from 'react';
import Navbarheader from './Components/Layout/Header/Navbarheader';
import Footer from './Components/Footer/Footer';
import Availableproducts from './Components/Products/Availableproducts';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';

function App() {
  const [openCart, setOpenCart]=useState(false)

  const openCartHandler =()=>{
    setOpenCart(true)
  }
  const closeCartHandler =()=>{
    setOpenCart(false)
  }


  return (
    <CartProvider>
      <Navbarheader onOpenCart={openCartHandler}/>
      {openCart && <Cart onCloseHandler={closeCartHandler}/>}
      <Availableproducts  onOpenCarthandle={openCartHandler}/>
      <Footer/>
    </CartProvider>
  );
}

export default App;
