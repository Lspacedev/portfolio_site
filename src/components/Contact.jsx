import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { LuUnplug } from "react-icons/lu";
function Contact() {
  return (
    <div className="Contact" id="contact">
      <div>
        <div className="heading">
          <h1>Lets connect.</h1>
          <LuUnplug className="icon" />
        </div>
        <p>tshepompogeng83@gmail.com</p>
        <p>+2779 161 6960</p>
      </div>
      <div className="links">
        <a
          rel="noreferrer"
          target="_blank"
          href="mailto:tshepompogeng83@gmail.com"
        >
          <MdOutlineMail className="icon" />
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/Lspacedev">
          <IoLogoGithub className="icon" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/tshepo-mpogeng-456977195"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
