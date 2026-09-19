import { useState } from "react";

import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";

import About from "./sections/About";
import Contact from "./sections/Contact";
// import Experience from "./sections/Experience";

import Footer from "./sections/Footer";
import Home from "./sections/Home";
// import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

import CustomCursor from "./components/CustomCursor";
import Education from "./sections/Education";
import MusicPlayer from "./components/MusicPlayer";
import IntroAnimation from "./components/IntroAnimation";

export default function MyApp() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative gradient text-white">
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <MusicPlayer />

      {/* Intro always on top until it finishes */}
      {!introDone && (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      )}

      {/* Homepage always present */}
      <Home introDone={introDone} />

      <About />
      <Skills />
      <Education />
      {/* <Experience /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}