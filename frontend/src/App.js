import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';

// Import pages
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />
      <Comparison />
      <Pillars />
      <Services />
      <Portfolio />
      <Blog />
      <LeadMagnet />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;