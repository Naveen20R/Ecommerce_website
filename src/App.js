// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Mens from './components/items/Mens';
import Home from './components/items/Home';
import Womens from './components/items/Womens';
import Kids from './components/items/Kids';
import KitchenItems from './components/items/KitchenItems';
import Beauty from './components/items/Beauty'
import Header from './components/Header/Header';
import ScrollToTop from 'react-scroll-to-top';
import Login from './components/Login/Login';
import Buy from './components/buyitems/Buy';
import BuyForm from './components/buyitems/BuyForm';
import Cart from './components/cart/Cart';
import Beautyproduct from './components/buyitems/Beautyproduct';
import Livingproduct from './components/buyitems/Livingproduct';
import Logo from './components/logo/Logo';
import Colorfilter from './components/products/mensproducts/Colorfilter';
import TwoWheelers from './components/products/mensproducts/twoWheelers/TwoWheelers';
import Mobiles from './components/products/mensproducts/mobiles/Mobiles';
import NewBeauty from './components/items/NewBeauty';
import Fasions from './components/items/Fasions';
import { useEffect, useState } from 'react';
import MobileDescription from './components/buyitems/MobileDescription';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  const [searchTerm, setSearchTerm] = useState('');
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  if (setSearchTerm != "") {
    localStorage.setItem('searchValues', searchTerm);
  };
 


  
  return (
    <>
      <Header   item={setSearchTerm} /> 
      <ScrollToTop color='white' style={{ backgroundColor: "lightskyblue" }} />
      <Routes> 
      {/* element={<Dashboard authed={true} />} /> */}
        <Route path='/' element={<Home searchTerm={searchTerm}/>} />      
        {/* <Route path='mens' element= { () => <Mens  title={`Props through component`}/>} /> */}
        <Route path="/mens" element={<Mens authed={true}  />} />
        <Route path='womens' element={<Womens />} />
        <Route path='kids' element={<Kids />} />
        <Route path='home-living' element={<KitchenItems />} />
        <Route path="Mobiles" element={<Mobiles />} />
        <Route path='beauty' element={<Beauty />} />
        <Route path='Mobiles/MobileDescription' element={<MobileDescription />} />
        <Route path='Mobiles/MobileDescription/BuyForm' element={<BuyForm />} />
        <Route path="fasions" element={<Fasions />} />
        <Route path='NewBeauty' element={<NewBeauty />} />
        <Route path="two_Wheelers" element={<TwoWheelers />} />
        <Route path='login' element={<Login />} />
        <Route path='cart' element={<Cart  />} />
        <Route path='buy' element={<Buy />} />
        <Route path='buy/buyform' element={<BuyForm />} />
        <Route path='beautyproduct' element={<Beautyproduct />} />
        <Route path='beautyproduct/buyform' element={<BuyForm />} />
        <Route path='livingproducts' element={<Livingproduct />} />
        <Route path='livingproducts/buyform' element={<BuyForm />} />
        <Route path='logo' element={<Logo />} />
        <Route path='mensproduct' element={<Colorfilter />} />
      </Routes>
    </>

  );
}

export default App;
