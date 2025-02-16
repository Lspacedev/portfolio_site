function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="introduction">
        <div>
          {/* style={{ color: "#a8a53c" }} */}
          <h3 style={{ margin: "2px", fontWeight: 700 }}>Hi, I'm</h3>
          <h1
            style={{
              margin: "2px",
              fontWeight: 900,
              fontSize: "3.2rem",
            }}
          >
            Tshepo Mpogeng.
          </h1>
          <h3 style={{ fontWeight: 300, margin: "2px", fontSize: "1.9rem" }}>
            <span> Full Stack </span>&<span> Mobile App</span> Developer
          </h3>
        </div>
        <p>
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
