const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <p className="mainName">bayaraa</p>
        <p className="heroIntroText">
          I craft responsive web application where technologies meet creativity.
          I am dedicated to transforming your digital vision into a reality.
        </p>
        {/* desktop */}
        <div className="heroBtnSection">
          
          {/* <a href="#contact" className="heroBtnContact" aria-label="Contact">
            Contact
          </a> */}

          <a
            className="heroBtnContact"
            aria-label="Coursera"
            href="Coursera FrontEnd.pdf"
            download="Coursera FrontEnd.pdf"
          >
            FrontEnd
          </a>
          <a
            className="heroBtnContact"
            aria-label="Coursera"
            href="Coursera FrontEnd.pdf"
            download="Coursera FrontEnd.pdf"
          >
            BackEnd
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
