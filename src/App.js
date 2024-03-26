import { Fragment } from 'react';
import Navbarheader from './Components/Layout/Header/Navbarheader';
import Footer from './Components/Footer/Footer';
import Availableproducts from './Components/Products/Availableproducts';

function App() {
  return (
    <Fragment>
      <Navbarheader/>
      <Availableproducts/>
      <Footer/>
    </Fragment>
  );
}

export default App;
