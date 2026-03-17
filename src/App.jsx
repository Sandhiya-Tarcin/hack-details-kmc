import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Teams from "./components/Teams";
import Departments from "./components/Departments";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Milestones from "./components/Milestones"; 
import EvaluationCriteria from "./components/EvaluationCriteria"; 
import Judges from "./components/Judges"; 

import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <div className="bg-black min-h-screen antialiased selection:bg-blue-500/40 selection:text-white">
      <Navbar />

      <main className="overflow-x-hidden flex flex-col">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="timeline"><Timeline /></section>
        <section id="evaluation"><EvaluationCriteria /></section>
        <section id="teams"><Teams /></section>
        <section id="Judges"><Judges /></section>
        <section id="departments"><Departments /></section>
        <section id="milestones"><Milestones /></section>
      </main>

      <Footer />
      
      <ScrollToTop />
    </div>
  );
}

export default App;