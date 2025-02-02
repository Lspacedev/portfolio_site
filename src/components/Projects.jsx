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
import { SiRedux } from "react-icons/si";
import { useState } from "react";
import { SiSocketdotio } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { IoCameraOutline } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";
function Projects() {
  const [currentTab, setCurrentTab] = useState("web");
  const webProjects = [
    {
      image: "/images/projects/social.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/social-media-app-frontend",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/social-media-app-backend",
        },
        {
          url_name: "Live",
          url: "https://social-media-app-frontend-delta.vercel.app/",
        },
      ],
      project_name: "Social Media App",
      description:
        "RANT is a social media app, that uses sockets and REST API architecture, to allow users to make posts and send messages. **Please note that the server may take up to one minute to spin**",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-router-dom" },
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
          url: "https://github.com/Lspacedev/messaging-app-frontend",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/messaging-app-backend",
        },
        {
          url_name: "Live",
          url: "https://messaging-app-frontend-alpha.vercel.app",
        },
      ],
      project_name: "Messaging App",
      description:
        "QuiQ, is a messaging app, that uses sockets and REST API architecture,to allow users to send messages, create groups and add friends. **Please note that the server may take up to one minute to spin**",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-router-dom" },
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
          url_name: "Client",
          url: "https://github.com/Lspacedev/afro-cinema-blog-client",
        },
        {
          url_name: "Author",
          url: "https://github.com/Lspacedev/afro-cinema-blog-author",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/afro-cinema-blog-api",
        },
        {
          url_name: "Live 1",
          url: "https://afro-cinema-blog-client.vercel.app/",
        },
        {
          url_name: "Live 2",
          url: "https://afro-cinema-blog-author.vercel.app/",
        },
      ],
      project_name: "Afro Cinema Blog - Client & Author",
      description:
        "Afro Cinema is a blog focused on showcasing African cinema. The blog is split into a client and author site, allowing the viewing and managing of blog posts.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-router-dom" },
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
          url_name: "Client",
          url: "https://github.com/Lspacedev/hotel-booking-app",
        },
        {
          url_name: "Admin",
          url: "https://github.com/Lspacedev/hotel-booking-app-admin",
        },
        {
          url_name: "Live 1",
          url: "https://hotel-booking-app-self-three.vercel.app/",
        },
        {
          url_name: "Live 2",
          url: "https://hotel-booking-app-admin.vercel.app/",
        },
      ],
      project_name: "ZaHotels.com - Client & Admin",
      description:
        "A hotel booking app that allows users to search, like and book hotel rooms. It is separated into the client side, for normal users, and the admin site, for hotel admins to manage hotel rooms.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-router-dom" },
        { icon: <SiRedux />, text: "Redux" },
        { icon: <RiFirebaseLine />, text: "Firebase" },
      ],
    },
    {
      image: "/images/projects/marketplace.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/marketplace-app-frontend",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/marketplace-app-backend",
        },
        {
          url_name: "Live",
          url: "https://marketplace-app-frontend.vercel.app/",
        },
      ],
      project_name: "Tribe.com",
      description:
        " A simple marketplace app that functions similar to Facebook marketplace, where users can sell their own products or buy products from other users.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <SiRedux />, text: "Redux" },
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
          url: "https://github.com/Lspacedev/online-recipe-app",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/recipe-app-api/tree/prod",
        },
        {
          url_name: "Live",
          url: "https://online-recipe-app.vercel.app/",
        },
      ],
      project_name: "Chefbook App",
      description:
        "A recipe app that allows users to create and manage recipes.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaReact />, text: "React-router-dom" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiMongodb />, text: "Mongodb" },
      ],
    },
    {
      image: "/images/projects/employee.png",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/node-employee-app",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/node-employee-app-backend",
        },
        {
          url_name: "Live",
          url: "https://timely-lebkuchen-77d271.netlify.app/",
        },
      ],
      project_name: "Employee Manager App",
      description:
        "An employee management app that uses Firebase as storage and database. Admins can add and manage employees, as well as add other admins.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React",
        },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <RiFirebaseLine />, text: "Firebase" },
      ],
    },
  ];
  const mobileProjects = [
    {
      video: "/videos/hidenseek.mp4",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/hide-and-seek",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/hide-and-seek-api",
        },
        {
          url_name: "APK",
          url: "https://drive.google.com/file/d/1mf-L9sJu7Pj7P7Mpeu2NZoz_L1TxOvn0/view?usp=drive_link",
        },
      ],
      project_name: "Hide and Seek Game",
      description:
        "A multiplayer hide and seek game, that allows one user to hide and the other to seek.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React Native",
        },
        { icon: <IoLogoAndroid />, text: "Android" },
        { icon: <SiSocketdotio />, text: "Socket.io" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiMongodb />, text: "Mongodb" },
      ],
    },
    {
      video: "/videos/imageapp.mp4",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/image-gallery-app",
        },

        {
          url_name: "APK",
          url: "https://drive.google.com/file/d/1RKh8Lk4p1va5RZaK8BFq_anquUS7u2X4/view?usp=drive_link",
        },
      ],
      project_name: "Image Gallery App",
      description:
        "Image Gallery App, with camera, using SQLite as a database to store image metadata.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React Native",
        },
        { icon: <IoLogoAndroid />, text: "Android" },

        { icon: <SiSqlite />, text: "Sqlite" },
        { icon: <IoCameraOutline />, text: "Camera" },
      ],
    },
    {
      video: "/videos/recipeapp.mp4",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/recipe-app",
        },
        {
          url_name: "Backend",
          url: "https://github.com/Lspacedev/recipe-app-api/tree/prod",
        },
        {
          url_name: "APK",
          url: "https://drive.google.com/file/d/1NhUss_pTK2MlQAwjQa3xdexvwEBYbiEU/view?usp=drive_link",
        },
      ],
      project_name: "Recipe App",
      description: "Recipe App allows users to create and manage recipes",
      stacks: [
        {
          icon: <FaReact />,
          text: "React Native",
        },
        { icon: <IoLogoAndroid />, text: "Android" },

        { icon: <FaReact />, text: "React-router-dom" },
        { icon: <FaNodeJs />, text: "NodeJs" },
        { icon: <SiExpress />, text: "Express" },
        { icon: <SiMongodb />, text: "Mongodb" },
      ],
    },
    {
      video: "/videos/shoplist.mp4",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/shop-list-app",
        },

        {
          url_name: "APK",
          url: "https://drive.google.com/file/d/1sKRg8dR7F5_Eoks9YxOmDLOGzLr-f-Gj/view?usp=drive_link",
        },
      ],
      project_name: "Shopping list App",
      description:
        "Shopping List App that uses SQLite as a database to store lists and list items.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React Native",
        },
        { icon: <IoLogoAndroid />, text: "Android" },

        { icon: <SiRedux />, text: "Redux" },
        { icon: <SiSqlite />, text: "Sqlite" },
      ],
    },

    {
      video: "/videos/AR2.mp4",
      urls: [
        {
          url_name: "Frontend",
          url: "https://github.com/Lspacedev/audio-recorder",
        },

        {
          url_name: "APK",
          url: "https://drive.google.com/file/d/1RodWFy3f-uJ-Yr_av1opJkNyvfy1dEyo/view?usp=drive_link",
        },
      ],
      project_name: "Audio Recorder App",
      description:
        "A simple audio recorder app, where users can record and manage audio.",
      stacks: [
        {
          icon: <FaReact />,
          text: "React Native",
        },
        { icon: <IoLogoAndroid />, text: "Android" },
      ],
    },
  ];
  return (
    <div className="Projects">
      <h1 id="projects">Projects</h1>
      <div className="projects-nav">
        <div
          className={currentTab === "web" ? "web currentTab" : "web"}
          onClick={() => setCurrentTab("web")}
        >
          Web
        </div>
        <div
          className={currentTab === "mobile" ? "mobile currentTab" : "mobile"}
          onClick={() => setCurrentTab("mobile")}
        >
          Mobile
        </div>
      </div>
      {currentTab === "web"
        ? webProjects.map((project, i) => (
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
                    <a href={obj.url} key={k} target="_blank">
                      <button key={k}>
                        {obj.url_name === "Frontend" ||
                        obj.url_name === "Client" ||
                        obj.url_name === "Author" ||
                        obj.url_name === "Admin" ||
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
          ))
        : mobileProjects.map((project, i) => (
            <div className="project" key={i}>
              <video width="320" height="240" controls>
                <source src={project.video} type="video/mp4" />
              </video>
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
                    <a href={obj.url} key={k} target="_blank">
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
