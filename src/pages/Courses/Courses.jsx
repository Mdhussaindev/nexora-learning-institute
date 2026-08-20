
import { ArrowRightOutlined, BookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import CourseCard from "../../components/CourseCard/CourseCard";
import courses from "../../data/courses";

import "./Courses.css";

function Courses() {
  return (
    <main className="courses-page">

      <section className="courses-hero">
        <div className="courses-container">

          <div className="courses-hero-content">

            <span className="courses-eyebrow">
              NEXORA LEARNING
            </span>

            <h1 className="courses-title">
              Learn skills that
              <span>move you forward.</span>
            </h1>

            <p className="courses-description">
              Explore practical, career-focused courses designed to help
              you build valuable skills, create real projects, and grow
              with confidence.
            </p>

            <div className="courses-hero-meta">

              <div className="hero-meta-item">
                <strong>25+</strong>
                <span>Courses</span>
              </div>

              <div className="hero-meta-divider"></div>

              <div className="hero-meta-item">
                <strong>40+</strong>
                <span>Experts</span>
              </div>

              <div className="hero-meta-divider"></div>

              <div className="hero-meta-item">
                <strong>10K+</strong>
                <span>Learners</span>
              </div>

            </div>

          </div>

      
          <div className="courses-hero-visual">

            <div className="course-orbit"></div>

            <div className="course-feature-card">

              <div className="feature-card-top">
                <span>FEATURED PATH</span>

                <div className="feature-icon">
                  <BookOutlined />
                </div>
              </div>

              <div className="feature-card-content">
                <span>START BUILDING</span>

                <h3>
                  From learning
                  <br />
                  to creating.
                </h3>
              </div>

              <div className="feature-card-bottom">
                <span>Practical learning</span>

                <div className="feature-line">
                  <span></span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="course-catalog">

        <div className="courses-container">

          <div className="catalog-header">

            <div>
              <span className="section-eyebrow">
                COURSE CATALOG
              </span>

              <h2>
                Find your next
                <span>skill to master.</span>
              </h2>
            </div>

            <p>
              Choose from carefully designed programs built around
              practical skills and real-world outcomes.
            </p>

          </div>


          <div className="courses-grid">

            {courses.map((course) => (
              <div className="course-card-wrapper" key={course.id}>
                <CourseCard course={course} />
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="courses-cta">

        <div className="courses-container">

          <div className="courses-cta-box">

            <div>
              <span>READY TO START?</span>

              <h2>
                Your next skill
                <br />
                starts here.
              </h2>
            </div>

            <Link to="/contact" className="courses-cta-button">
              Get Started
              <ArrowRightOutlined />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Courses;