import {  useState } from 'react';
import Navbarheader from './Components/Layout/Header/Navbarheader';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import { BrowserRouter, Route,  Routes  } from 'react-router-dom';
import Store from './Components/Layout/Pages/Store';
import Aboutus from './Components/Layout/Pages/Aboutus';
import Home from './Components/Layout/Pages/Home';


function App() {
  const [openCart, setOpenCart]=useState(false)

  const openCartHandler =()=>{
    setOpenCart(true)
  }
  const closeCartHandler =()=>{
    setOpenCart(false)
  }


  return (
    <BrowserRouter>
        <CartProvider>
          {openCart && <Cart onCloseHandler={closeCartHandler}/>}
          <Navbarheader onOpenCart={openCartHandler}/>
        <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='store' element={<Store onOpenCarthandle={openCartHandler}/>}/>
              <Route path='about' element={<Aboutus/>}/>
            </Routes>
          <Footer/>
        </main>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
