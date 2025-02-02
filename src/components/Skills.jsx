function Skills() {
  const frontend = [
    {
      icon: "/images/icons/javascript-js.svg",
      text: "JavaScript",
    },
    {
      icon: "/images/icons/html-5.svg",
      text: "Html",
    },
    {
      icon: "/images/icons/file-type-css.svg",
      text: "CSS",
    },
    {
      icon: "/images/icons/typescript-icon.svg",
      text: "TypeScript",
    },
    {
      icon: "/images/icons/React-icon.svg.png",
      text: "React.js",
    },
    {
      icon: "/images/icons/React-icon.svg.png",
      text: "React Native",
    },
    {
      icon: "/images/icons/icons8-redux-48.png",
      text: "Redux",
    },
  ];
  const backend = [
    {
      icon: "/images/icons/icons8-nodejs-48.png",
      text: "Node.js",
    },
    {
      icon: "/images/icons/express.png",
      text: "Express.js",
    },
    {
      icon: "/images/icons/mongodb.svg",
      text: "MongoDB",
    },
    {
      icon: "/images/icons/postgre.png",
      text: "PostgreSQL",
    },
    {
      icon: "/images/icons/icons8-prisma-orm-50.png",
      text: "PRISMA",
    },
    {
      icon: "/images/icons/firebase.png",
      text: "Firebase",
    },
  ];
  const tools = [
    {
      icon: "/images/icons/icons8-git-60.png",
      text: "Git",
    },
  ];
  return (
    <div className="Skills">
      <h1 id="skills" className="header">
        Skills
      </h1>
      <div className="frontend">
        <h4>Frontend</h4>
        <div className="skills-div">
          {frontend.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="icon">
                <img src={skill.icon} />
              </div>
              <div className="text">{skill.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="backend">
        <h4>Backend</h4>
        <div className="skills-div">
          {backend.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="icon">
                <img src={skill.icon} />
              </div>
              <div className="text">{skill.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="tools">
        <h4>Tools</h4>
        <div className="skills-div">
          {tools.map((skill, i) => (
            <div className="skill" key={i}>
              <div className="icon">
                <img src={skill.icon} />
              </div>
              <div className="text">{skill.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
