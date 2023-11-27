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
  const [pageTransition, setPageTransition] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      localStorage.setItem("isLoaded", true);
    });

    if (localStorage.getItem("isLoaded")) {
      setPageTransition(false);
    } else {
      setPageTransition(true);
    }
  }, []);
  return (
    <div>
      {pageTransition && (
        <div className="overlay">
          <p className="overlayText">
            Sharan <span className="colorCircle"></span>
          </p>
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
