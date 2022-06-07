import "./contact.css";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1><b>Contact Me</b></h1>
      <div className="contact-links">
        <a
          href="https://www.behance.net/muhammadusman93"
          className="contact behance"
          target={"blank"}
        >
          <AiFillBehanceCircle className="icon" />
          <h2>
            Behance <span>Usman Graphics</span>
          </h2>
        </a>

        <a
         
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+92 331 5938459</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/usmangraphics" className="contact instagram" target={"blank"}>
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>usmangraphics</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;