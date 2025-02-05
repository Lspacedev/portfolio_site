import { SiStartrek } from "react-icons/si";
function About() {
  return (
    <div className="About" id="about">
      <h1>About Me</h1>
      <p>
        I am a Full Stack and Mobile App Developer, based in Pretoria, South
        Africa. I specialize in both the MERN and PERN stacks, as well as React
        Native for Mobile Application development.
      </p>
      <p>
        My interest in tech began in highschool experimenting with computer
        hardware. I enjoyed the idea of creating and working on machines. I
        eventually discovered coding and came to the conclusion that creating
        and controlling the world that ran off the machines was more interesting
        and enjoyable.
      </p>

      <p>
        I am passionate about writing clean efficient code, that becomes fully
        functional, user friendly digital solutions. I like to think of myself
        as a student of the game, so I'm always ready to delve into new
        technologies and expand my knowledge and skills.
      </p>
      <div className="last">
        <p>When I'm not coding, I'm aboard the Starship Enterprise(TOS).</p>
        <SiStartrek size={24} />
      </div>
    </div>
  );
}

export default About;
