function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="introduction">
        <div>
          {/* style={{ color: "#a8a53c" }} */}
          <h2
            style={{
              fontWeight: 800,
              margin: "2px",
              fontSize: "3.2rem",
            }}
          >
            Hello, I'm Tshepo.
          </h2>

          <h2
            style={{
              fontWeight: 200,
              margin: "2px 0px",
              fontSize: "1.8rem",
            }}
          >
            A Full Stack & Mobile App Developer.
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
