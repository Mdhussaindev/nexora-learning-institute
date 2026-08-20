import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LinkedinFilled,
  GithubFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand-section">
            <Link
              to="/"
              className="footer-brand"
              onClick={scrollToTop}
            >
              <div className="footer-brand-icon">✦</div>

              <div className="footer-brand-text">
                <span className="footer-brand-name">NEXORA</span>
                <span className="footer-brand-tagline">
                  Learning Institute
                </span>
              </div>
            </Link>

            <p className="footer-description">
              Empowering ambitious learners with practical skills,
              expert guidance, and industry-focused education for
              a better professional future.
            </p>

            <div className="footer-socials">

              <a
                href="https://www.linkedin.com/in/muhammad-hussain-khan-b3b2203b3/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinFilled />
              </a>

              <a
                href="https://github.com/Mdhussaindev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubFilled />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923482237414"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppOutlined />
              </a>

            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>

            <Link to="/about" onClick={scrollToTop}>
              About Us
            </Link>

            <Link to="/courses" onClick={scrollToTop}>
              Our Courses
            </Link>

            <Link to="/instructors" onClick={scrollToTop}>
              Our Instructors
            </Link>

            <Link to="/contact" onClick={scrollToTop}>
              Contact Us
            </Link>
          </div>

          <div className="footer-column">
            <h3>Popular Programs</h3>

            <Link to="/courses" onClick={scrollToTop}>
              Web Development
            </Link>

            <Link to="/courses" onClick={scrollToTop}>
              UI/UX Design
            </Link>

            <Link to="/courses" onClick={scrollToTop}>
              Digital Marketing
            </Link>

            <Link to="/courses" onClick={scrollToTop}>
              Data & Analytics
            </Link>

            <Link to="/courses" onClick={scrollToTop}>
              Professional Skills
            </Link>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <a href="mailto:mdhussain.dev00@gmail.com">
              <span className="footer-contact-icon">
                <MailOutlined />
              </span>

              <span> mdhussain@gmail.com</span>
            </a>

            <a href="tel:+923482237414">
              <span className="footer-contact-icon">
                <PhoneOutlined />
              </span>

              <span>+92 348 2237414</span>
            </a>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <EnvironmentOutlined />
              </span>

              <span>Karachi, Pakistan</span>
            </div>
          </div>

        </div>

        <div className="footer-cta">
          <div>
            <span className="footer-cta-label">
              START YOUR LEARNING JOURNEY
            </span>

            <h2>
              Ready to build skills that move
              <span> your future forward ?</span>
            </h2>
          </div>

          <Link
            to="/courses"
            className="footer-cta-button"
            onClick={scrollToTop}
          >
            Explore Courses
            <ArrowRightOutlined />
          </Link>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Nexora Learning Institute. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-top"
            onClick={scrollToTop}
          >
            Back to top
            <ArrowRightOutlined />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;