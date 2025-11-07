import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ElectricalItems from "./components/ElectricalItems";

const Home = () => {
  return (
    <div className="dark-container">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electrical-items" element={
            <div className="dark-container">
              <Header />
              <ElectricalItems />
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;