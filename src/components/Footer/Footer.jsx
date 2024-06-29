import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <FaRegCopyright size={12}/> 2024 NexPlaceRealty All rights reserved
      </p>
      <p className="social-media">
        <a href="https://www.instagram.com/nexplace_realty?igsh=cHpuOHdyeDM1eWNh" target="_blank">
          <FaInstagram size={25}/>
        </a>
        <a href="https://www.facebook.com/share/jpasEXi4eNJ4BTUd/?mibextid=LQQJ4d" target="_blank">
          <FaFacebook size={25}/>
        </a>
        <a href="https://www.linkedin.com/company/nexplacerealty/" target="_blank">
          <FaLinkedin size={25}/>
        </a>
      </p>
    </div>
  );
};

export default Footer;
