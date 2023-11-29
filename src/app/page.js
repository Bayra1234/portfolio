"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const [pageTransition, setPageTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(false);
    }, 8000);
  }, []);
  return (
    <div>
      {pageTransition && (
        <div className="overlay">
          <div className="barBottom"></div>
        </div>
      )}
      <div>
        <Navbar />
        <Hero />
        <Works />
        <Skills />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
