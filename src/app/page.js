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
    sessionStorage.setItem("isLoaded", true);
    if (sessionStorage.getItem("isLoaded")) {
      setPageTransition(true);
    } else {
      setPageTransition(true);
    }
  }, []);
  return (
    <div>
      {/* {pageTransition && (
        <div className="overlay">
          <p className="text"></p>
        </div>
      )} */}
      <div>
        {/* <Navbar /> */}
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
