function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="introduction">
        <div>
          {/* style={{ color: "#a8a53c" }} */}
          <h2
            style={{
              fontWeight: 900,
              margin: "2px",
              fontSize: "2.8rem",
            }}
          >
            Hello World!
          </h2>

          <h2
            style={{
              fontWeight: 200,
              margin: "2px 0px",
              fontSize: "1.8rem",
            }}
          >
            I'm Tshepo Mpogeng. A Full Stack & Mobile Developer.
          </h2>
        </div>
        <p style={{ fontWeight: 200 }}>
          Always seeking opportunities to strenghten my knowledge in this vast
          world of programming.
        </p>
        <a href="./tshepo_mpogeng_resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
      <div className="photo">
        <img src="/images/profile.png" />
      </div>
    </div>
  );
}

export default Hero;
