import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Business from "./pages/Business";
import ContactUs from "./pages/ContactUs";
import Housing from "./pages/Housing";
import Personal from "./pages/Personal";
import TaxOnline from "./pages/TaxOnline";
import { NoMatch } from "./pages/nomatch";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config.js";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { messages as cnMessages } from "./locales/zh-CN/messages";


i18n.loadLocaleData({
  en: { plurals: "en" },
  cn: { plurals: "zh-CN" },
});
i18n.load({
  en: enMessages,
  cn: cnMessages,
});
i18n.activate("en");
function setLanguage(language) {
  i18n.activate(language);
}

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
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
  });
  return (
    <I18nProvider i18n={i18n}>
      <BrowserRouter>
        <Navbar user={user} setLanguage={setLanguage} />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route
            path="aboutus"
            element={<AboutUs />}
            activeClassName="actived"
          />
          <Route
            path="business"
            element={<Business />}
            activeClassName="actived"
          />
          <Route
            path="contactus"
            element={<ContactUs />}
            activeClassName="actived"
          />
          <Route
            path="housing"
            element={<Housing />}
            activeClassName="actived"
          />
          <Route
            path="personal"
            element={<Personal />}
            activeClassName="actived"
          />
          <Route
            path="taxonline"
            element={<TaxOnline user={user} />}
            activeClassName="actived"
          />
          <Route
            path="signin"
            element={<SignIn setUser={setUser} />}
            activeClassName="actived"
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
