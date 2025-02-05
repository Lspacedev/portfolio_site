function Hero() {
  return (
    <div className="Hero" id="hero">
      <div className="introduction">
        <div>
          <h1>Full Stack & Mobile App</h1>
          <h1>Developer</h1>
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
