"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MagneticGsap = ({ children }) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(magnetRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magnetRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e) => {
      xTo(0);
      yTo(0);
    };

    if (magnetRef.current) {
      magnetRef.current.addEventListener("mousemove", mouseMove);
      magnetRef.current.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (magnetRef.current) {
        magnetRef.current.removeEventListener("mousemove", mouseMove);
        magnetRef.current.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);
  return <div ref={magnetRef}>{children}</div>;
};

export default MagneticGsap;
