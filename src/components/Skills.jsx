function Skills() {
  const frontend = [
    {
      icon: "",
      text: "JavaScript",
    },
    {
      icon: "",
      text: "Html",
    },
    {
      icon: "",
      text: "CSS",
    },
    {
      icon: "",
      text: "TypeScript",
    },
    {
      icon: "",
      text: "React.js",
    },
    {
      icon: "",
      text: "React Native",
    },
  ];
  const backend = [
    {
      icon: "",
      text: "Node.js",
    },
    {
      icon: "",
      text: "Express.js",
    },
    {
      icon: "",
      text: "MongoDB",
    },
    {
      icon: "",
      text: "PostgreSQL",
    },
    {
      icon: "",
      text: "PRISM ORM",
    },
    {
      icon: "",
      text: "Firebase",
    },
  ];
  const technologies = [
    {
      icon: "",
      text: "Git",
    },
  ];
  return (
    <div className="Skills">
      <div className="frontend">
        {frontend.map((skill, i) => (
          <div className="skill">
            <div className="icon">{skill.icon}</div>
            <div className="text">{skill.text}</div>
          </div>
        ))}
      </div>
      <div className="backend">
        {backend.map((skill, i) => (
          <div className="skill">
            <div className="icon">{skill.icon}</div>
            <div className="text">{skill.text}</div>
          </div>
        ))}
      </div>
      <div className="technologies">
        {technologies.map((skill, i) => (
          <div className="skill">
            <div className="icon">{skill.icon}</div>
            <div className="text">{skill.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
