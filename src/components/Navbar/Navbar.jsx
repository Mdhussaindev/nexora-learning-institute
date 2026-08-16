import { NavLink } from "react-router-dom";
import { ArrowRightOutlined, MenuOutlined } from "@ant-design/icons";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <NavLink to="/" className="brand">
          <div className="brand-icon">✦</div>

          <div className="brand-text">
            <span className="brand-name">NEXORA</span>
            <span className="brand-tagline">Learning Institute</span>
          </div>
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/instructors"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Instructors
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="navbar-actions">
          <NavLink to="/courses" className="nav-cta">
            Explore Courses
            <ArrowRightOutlined />
          </NavLink>

          <button className="mobile-menu">
            <MenuOutlined />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; 
