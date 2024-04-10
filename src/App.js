import {  useContext, useState } from 'react';
import Navbarheader from './Components/Layout/Header/Navbarheader';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import {Route, Redirect,Switch} from 'react-router-dom';
import Store from './Components/Layout/Pages/Store';
import Aboutus from './Components/Layout/Pages/Aboutus';
import Home from './Components/Layout/Pages/Home';
import Contactus from './Components/Layout/Pages/Contactus';
import ProductDetail from './Components/Products/ProductDetail';
import Login from './Components/Layout/Pages/Login';
import { AuthContext } from './Components/Store/AuthContext/auth-context';
import CartProvider from './Components/Store/CartProvider';


function App() {
  const [openCart, setOpenCart]=useState(false)
  const authContext = useContext(AuthContext)
  console.log(authContext)

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
                      {authContext.isLoggedIn ? (<Store onOpenCarthandle={openCartHandler}/>) : (<Redirect to='/login'/>)}
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
                 {!authContext.isLoggedIn && <Route path='/login' exact>
                    <Login/>
                  </Route>}
                  <Route path='*'>
                    <Redirect to= '/' />
                  </Route>
                </Switch>
            <Footer/>
          </main>
        </CartProvider>
  );
}

export default App;
