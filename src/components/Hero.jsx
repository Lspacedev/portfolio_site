function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="introduction">
        <div>
          {/* style={{ color: "#a8a53c" }} */}
          <p style={{ fontWeight: 200 }}>Hello, I'm Tshepo Mpogeng.</p>

          <h2
            style={{
              fontWeight: 800,
              margin: "2px",
              fontSize: "2.2rem",
            }}
          >
            A Full Stack & Mobile Developer.
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
