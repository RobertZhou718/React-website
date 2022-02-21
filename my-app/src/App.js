import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Business from "./pages/Business";
import ContactUs from "./pages/ContactUs";
import Housing from "./pages/Housing";
import Personal from "./pages/Personal";
import TaxOnline from "./pages/TaxOnline";
import {NoMatch} from "./pages/nomatch";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { auth } from "./config.js";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const App = () => {
  const [user,setUser]= useState(null);
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          setUser(user);
        } else {
          alert("please verify");
        }
      } else {
        setUser(null);
      }
    });
  };
  monitorAuthState();
  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Routes>
        <Route path='/'  element={<Home/>} />
          <Route path='AboutUs' element={<AboutUs/>} activeClassName='actived'/>
          <Route path='Business' element={<Business/>} activeClassName='actived'/>
          <Route path='ContactUs' element={<ContactUs/>} activeClassName='actived'/>
          <Route path='Housing' element={<Housing/>} activeClassName='actived'/>
          <Route path='Personal' element={<Personal/>} activeClassName='actived'/>
          <Route path='TaxOnline' element={<TaxOnline/>} activeClassName='actived'/>
          <Route path='SignIn' element={<SignIn setUser={setUser}/>} activeClassName='actived'/>
          <Route path="*" element={<NoMatch/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
