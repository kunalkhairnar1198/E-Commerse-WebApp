import {  useState } from 'react';
import Navbarheader from './Components/Layout/Header/Navbarheader';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import {Route} from 'react-router-dom';
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
        <CartProvider>
          {openCart && <Cart onCloseHandler={closeCartHandler}/>}
          <Navbarheader onOpenCart={openCartHandler}/>
          <main>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/store'>
                    <Store onOpenCarthandle={openCartHandler}/>
                </Route>
                <Route path='/about'>
                  <Aboutus/>
                </Route>
          <Footer/>
        </main>
        </CartProvider>
  );
}

export default App;
