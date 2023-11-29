import { useRef, useEffect, useState } from "react";

const AboutMe = () => {
  const [observerVisible, setObserverVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setObserverVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      id="aboutme"
      className={`aboutme ${observerVisible ? "fadeScroll" : "obfade"}`}
      ref={myRef}
    >
      <p className="aboutHeader ">About Me</p>

      <div className="mt-[40px] lg:mt-[50px]">
        <p className="aboutText"> Hello, I’m Sharan!</p>
        <p className="aboutText">
          I’m a front-end developer based in Bangalore. I can develop responsive
          web applications which are blazing fast from scratch and raise them
          into modern user-friendly web experiences.{" "}
        </p>
        <p className="aboutText">
          Transforming my creativity and knowledge into a websites and web
          application has been my passion for over a year. I have been helping
          various clients to establish their presence online. I always strive to
          learn about the newest technologies and frameworks.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
