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
          <Route path='AboutUs' element={<AboutUs/>} />
          <Route path='Business' element={<Business/>} />
          <Route path='ContactUs' element={<ContactUs/>} />
          <Route path='Housing' element={<Housing/>} />
          <Route path='Personal' element={<Personal/>} />
          <Route path='TaxOnline' element={<TaxOnline/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

