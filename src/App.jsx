import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import { Route, Routes } from "react-router-dom";
import DigitalMarketingPage from "./pages/DigitalMarketingPage/DigitalMarketingPage";
import WhyUsPage from "./pages/WhyUsPage/WhyUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/digital-marketing" element={<DigitalMarketingPage />}></Route>
        <Route path="/why-us" element={<WhyUsPage />}></Route>
        <Route path="/contact" element={<ContactUsPage />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
