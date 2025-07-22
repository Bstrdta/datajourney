import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import { CalendlyProvider } from './contexts/CalendlyContext';

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
import CalendlyModal from './components/CalendlyModal';

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
      <Suspense fallback={<div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>}>
        <BrowserRouter>
          <LanguageProvider>
            <CalendlyProvider>
              <Header />
              <Routes>
                {/* French routes */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                
                {/* English routes */}
                <Route path="/en" element={<Home />} />
                <Route path="/en/services" element={<ServicesPage />} />
                <Route path="/en/portfolio" element={<PortfolioPage />} />
                <Route path="/en/blog" element={<BlogPage />} />
                <Route path="/en/about" element={<AboutPage />} />
              </Routes>
              <Footer />
              <CalendlyModal />
            </CalendlyProvider>
          </LanguageProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;