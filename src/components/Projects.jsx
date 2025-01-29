import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
function Projects() {
  const projects = [
    {
      image: "/images/projects/social.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Backend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Social Media App",
      description:
        "RANT is a social media app, using sockets and REST api,to allow users to make posts and send messages.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-Router-DOM" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiPostgresql />, text: "PostgreSQL" },
        { icon: <SiPrisma />, text: "Prisma" },
        { icon: <RiSupabaseLine />, text: "Supabase" },
      ],
    },
    {
      image: "/images/projects/messaging.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Backend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Messaging App",
      description:
        "QuiQ, is a messaging app, that uses sockets and REST Api, allowing users to send messages, create groups and add friends.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-Router-DOM" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiPostgresql />, text: "PostgreSQL" },
        { icon: <SiPrisma />, text: "Prisma" },
        { icon: <RiSupabaseLine />, text: "Supabase" },
      ],
    },
    {
      image: "/images/projects/blog.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Backend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Afro Cinema Blog",
      description:
        "Afro Cinema is a blog, with a client and admin site, allowing managing of blog posts.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-Router-DOM" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiPostgresql />, text: "PostgreSQL" },
        { icon: <SiPrisma />, text: "Prisma" },
        { icon: <RiSupabaseLine />, text: "Supabase" },
      ],
    },
    {
      image: "/images/projects/hotel.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Backend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Hotel Booking App",
      description:
        "Hotel Booking App allows users to search, favourite and book hotel rooms",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-Router-DOM" },
        { icon: <RiFirebaseLine />, text: "Firebase" },
      ],
    },
    {
      image: "/images/projects/shop.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Backend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Recipes App",
      description: "Recipe App allows users to create and manage recipes",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-Router-DOM" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiMongodb />, text: "Mongodb" },
      ],
    },
    {
      image: "/images/projects/shop.png",
      urls: [
        {
          url_name: "Frontend",
          url: "",
        },
        {
          url_name: "Backend",
          url: "",
        },
        {
          url_name: "Live",
          url: "",
        },
      ],
      project_name: "Shopping List App",
      description: "Allows users to create and manage shopping lists",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-Router-DOM" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiPostgresql />, text: "PostgreSQL" },
        { icon: <SiPrisma />, text: "Prisma" },
        { icon: <RiSupabaseLine />, text: "Supabase" },
      ],
    },
  ];
  return (
    <div className="Projects">
      {projects.map((project, i) => (
        <div className="project" key={i}>
          <img src={project.image} />
          <div className="project-info">
            <h3>{project.project_name}</h3>
            <p>{project.description}</p>
            <div className="stacks">
              {project.stacks.map((stack, s) => (
                <div className="stack" key={s}>
                  {stack.icon}
                  <div>{stack.text}</div>
                </div>
              ))}
            </div>
            <div className="buttons">
              {project.urls.map((obj, k) => (
                <a href={obj.url} key={k}>
                  <button key={k}>
                    {obj.url_name === "Frontend" ||
                    obj.url_name === "Backend" ? (
                      <IoLogoGithub />
                    ) : (
                      <GoArrowUpRight />
                    )}
                    <div>{obj.url_name}</div>
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
