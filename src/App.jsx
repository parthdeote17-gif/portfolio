import React, { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education"; // Naya Education import kiya
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone ? (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      ) : (
        <div className="relative gradient text-white min-h-screen selection:bg-[#1cd8d2] selection:text-black">
          <CustomCursor />
          <ParticlesBackground />
          
          <div className="relative z-10">
            <Navbar />
            <Home />
            <About />
            <Education /> {/* Education ko About ke theek baad lagaya */}
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}