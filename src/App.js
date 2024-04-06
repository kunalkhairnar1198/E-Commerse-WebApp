import {  useState } from 'react';
import Navbarheader from './Components/Layout/Header/Navbarheader';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import {Route} from 'react-router-dom';
import Store from './Components/Layout/Pages/Store';
import Aboutus from './Components/Layout/Pages/Aboutus';
import Home from './Components/Layout/Pages/Home';
import Contactus from './Components/Layout/Pages/Contactus';
import { Switch } from 'react-router-dom';
import ProductDetail from './Components/Products/ProductDetail';


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
              <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/store'exact>
                    <Store onOpenCarthandle={openCartHandler}/>
                </Route>
                <Route path='/store/:productId' exact>
                    <ProductDetail/>
                </Route>
                <Route path='/about' exact>
                  <Aboutus/>
                </Route>
                <Route path='/contactus' exact>
                  <Contactus/>
                </Route>
                </Switch>
          <Footer/>
        </main>
        </CartProvider>
  );
}

export default App;
