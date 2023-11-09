"use client";

import { useEffect, useState, useLayoutEffect, useRef } from "react";

import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Skills from "@/components/skills/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  const [pageTransition, setPageTransition] = useState(true);

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    sessionStorage.setItem("isLoaded", true);
    if (sessionStorage.getItem("isLoaded")) {
      setPageTransition(true);
    } else {
      setPageTransition(true);
    }

    // const updateMousePosition = (e) => {
    //   setPosition({ x: e.clientX - 15, y: e.clientY - 5 });
    // };

    // window.addEventListener("mousemove", updateMousePosition);

    // return () => {
    //   window.removeEventListener("mousemove", updateMousePosition);
    // };

    (async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new locomotiveScroll();
    })();
  }, []);
  return (
    <div>
      {/* {pageTransition && (
        <div className="overlay">
          <p className="text"></p>
        </div>
      )} */}
      <div>
        {/* <div
          id="cursour"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div> */}
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
