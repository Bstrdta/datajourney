import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './contexts/LanguageContext';
import { CalendlyProvider } from './contexts/CalendlyContext';
import { LogoAnimationProvider } from './contexts/LogoAnimationContext';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import KPISection from './components/KPICard';
import Pillars from './components/Pillars';
import Services from './components/Services';
import ProcessFlow from './components/ProcessFlow';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';
import CalendlyModal from './components/CalendlyModal';
import MouseFollower from './components/MouseFollower';

// Import pages
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />
      <Comparison />
      <KPICard />
      <Pillars />
      <Services />
      <ProcessFlow />
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
              <LogoAnimationProvider>
                <Header />
                <Routes>
                  {/* French routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<ArticleDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  
                  {/* English routes */}
                  <Route path="/en" element={<Home />} />
                  <Route path="/en/services" element={<ServicesPage />} />
                  <Route path="/en/portfolio" element={<PortfolioPage />} />
                  <Route path="/en/blog" element={<BlogPage />} />
                  <Route path="/en/blog/:slug" element={<ArticleDetailPage />} />
                  <Route path="/en/about" element={<AboutPage />} />
                </Routes>
                <Footer />
                <CalendlyModal />
                <MouseFollower />
              </LogoAnimationProvider>
            </CalendlyProvider>
          </LanguageProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;