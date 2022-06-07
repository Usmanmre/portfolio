import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/usmangraphics"> 
          <BsInstagram className="social" target={"blank"} />
        </a>
        <a href="https://www.facebook.com">  
          {" "}
          <FaFacebookF className="social" target={"blank"} />
        </a>
        <a href="https://dribbble.com/mohamedachraf">  
          {" "}
          <TiSocialDribbble className="social" target={"blank"}/>
        </a>
 
        <a href="https://www.youtube.com"> 
          <TiSocialYoutube className="social" target={"blank"}/>
        </a>

        <a href="https://github.com"> 
          <TiSocialGithub className="social" target={"blank"} />
        </a>
      </div>
    </div>
  );
}
export default Footer;