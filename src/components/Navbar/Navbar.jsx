
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowRightOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">


        <NavLink
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <div className="brand-icon">✦</div>

          <div className="brand-text">
            <span className="brand-name">
              NEXORA
            </span>

            <span className="brand-tagline">
              Learning Institute
            </span>
          </div>
        </NavLink>


        <div className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Instructors
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </NavLink>

        </div>


        <div className="navbar-actions">

          <NavLink
            to="/courses"
            className="nav-cta"
          >
            Explore Courses
            <ArrowRightOutlined />
          </NavLink>


          <button
            type="button"
            className="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <CloseOutlined />
            ) : (
              <MenuOutlined />
            )}=
          </button>

        </div>


        <div
          className={`mobile-nav ${
            isMenuOpen ? "mobile-nav-open" : ""
          }`}
        >

          <div className="mobile-nav-inner">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span>01</span>
              Home
            </NavLink>


            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span>02</span>
              About
            </NavLink>


            <NavLink
              to="/courses"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span>03</span>
              Courses
            </NavLink>


            <NavLink
              to="/instructors"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span>04</span>
              Instructors
            </NavLink>


            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
            >
              <span>05</span>
              Contact
            </NavLink>


            <NavLink
              to="/courses"
              onClick={closeMenu}
              className="mobile-nav-cta"
            >
              <span>
                Explore Courses
              </span>

              <ArrowRightOutlined />
            </NavLink>

          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;
