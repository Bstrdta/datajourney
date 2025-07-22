import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import LeadMagnet from './components/LeadMagnet';
import Contact from './components/Contact';

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
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
