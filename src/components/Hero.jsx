function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="introduction">
        <div>
          {/* style={{ color: "#a8a53c" }} */}
          <h3 style={{ margin: "2px", fontWeight: 200 }}>
            Hello, I'm Tshepo Mpogeng.
          </h3>
          <h1
            style={{
              margin: "2px",
              fontWeight: 900,
              fontSize: "3.2rem",
            }}
          ></h1>
          <h1 style={{ fontWeight: 800, margin: "2px", fontSize: "2.5rem" }}>
            <span>Full Stack </span>&<span> Mobile App</span> Developer
          </h1>
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
