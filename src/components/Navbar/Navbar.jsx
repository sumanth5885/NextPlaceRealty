import "./Navbar.css";
import next_place_logo from "../../assets/next_place_logo_favicon.jpg";
import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 20 ? setIsScrolling(true) : setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <div className={`navbar ${isScrolling ? "dark-nav" : ""}`}>
      <div className="nav-left">
        <img src={next_place_logo} alt="Next Place Logo" />
      </div>
      <div className={`nav-middle my-menu ${showMenu && "show-menu"}`}>
        <ul className="menu-items">
          <Link to="/">
            <li
              className={active === "home" ? "active" : ""}
              onClick={() => {setActive("home"); window.scrollTo(0,0)}}
            >
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              className={active === "about-us" ? "active" : ""}
              onClick={() => {setActive("about-us"); window.scrollTo(0, 0)}}
            >
              About us
            </li>
          </Link>

          <Link to="/digital-marketing">
            <li
              className={active === "digital-marketing" ? "active" : ""}
              onClick={() => {setActive("digital-marketing"); window.scrollTo(0, 0)}}
            >
              Digital Marketing
            </li>
          </Link>

          <Link to="/why-us">
            <li
              className={active === "why-us" ? "active" : ""}
              onClick={() => {setActive("why-us"); window.scrollTo(0, 0)}}
            >
              Why us?
            </li>
          </Link>
        </ul>
      </div>
      <div className="nav-right">
        <Link to="/contact"><button className="contact-btn" onClick={()=>{window.scrollTo(0, 0)}}>Contact us</button></Link>
      </div>
      <div className="menu-bar">
        <RxDropdownMenu size={30} onClick={handleShowMenu} />
      </div>
    </div>
  );
};

export default Navbar;
