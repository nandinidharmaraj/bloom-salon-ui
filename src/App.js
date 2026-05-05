import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import BookingSection from "./components/BookingSection";
import About from "./components/About";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main id="top">
        <Hero />
        <Highlights />
        <section className="section-heading" id="photos">
        
        </section>
        <Gallery />
        <BookingSection />
        <About />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
