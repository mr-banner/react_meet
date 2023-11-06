import logo from "../img/local_meet.png";
import "../components/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const handleToggle = () => {
    const navLinks = document.getElementById("nav-links");
      navLinks.classList.toggle("active");
  };
                            
  return (
    <>
      <nav>
        <div className="container main-nav flex">
          <a className="company-logo">
            <img src={logo} alt="Comapny logo" />
          </a>
          <div className="nav-links" id="nav-links">
            <ul className="flex">
              <li>
                <a href="#" className="hoover-links">
                  Home
                </a>
              </li>
              <li>
                <a href= "#" className="hoover-links">
                  About
                </a>
              </li>
              <li>
                <a href="/signup" className="hoover-links primary-btn">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/login" className="hoover-links secondary-btn">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <a
            className="nav-toggle hoover-links"
            id="nav-toggle"
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </nav>
    </>
  );
};
