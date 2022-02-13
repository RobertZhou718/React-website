import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Business from "./pages/Business";
import ContactUs from "./pages/ContactUs";
import Housing from "./pages/Housing";
import Personal from "./pages/Personal";
import TaxOnline from "./pages/TaxOnline";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home/>} />
          <Route path='AboutUs' element={<AboutUs/>} activeClassName='actived'/>
          <Route path='Business' element={<Business/>} activeClassName='actived'/>
          <Route path='ContactUs' element={<ContactUs/>} activeClassName='actived'/>
          <Route path='Housing' element={<Housing/>} activeClassName='actived'/>
          <Route path='Personal' element={<Personal/>} activeClassName='actived'/>
          <Route path='TaxOnline' element={<TaxOnline/>} activeClassName='actived'/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

