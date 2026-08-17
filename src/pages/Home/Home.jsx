import {
  ArrowRightOutlined,
  PlayCircleOutlined,
  CheckCircleFilled,
  ThunderboltFilled,
  BookOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import CourseCard from "../../components/CourseCard/CourseCard";
import courses from "../../data/courses";

import "./Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="hero-section">
        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="hero-badge">
              <span className="badge-dot"></span>
              Learn today. Lead tomorrow.
            </div>

            <h1 className="hero-title">
              Learn Skills That
              <br />
              <span>Move You Forward.</span>
            </h1>

            <p className="hero-description">
              Build real-world skills with practical courses, expert
              instructors, and a learning experience designed around your
              career goals.
            </p>

            <div className="hero-buttons">

              <a href="/courses" className="hero-primary-btn">
                Explore Courses
                <ArrowRightOutlined />
              </a>

              <button className="hero-secondary-btn">
                <PlayCircleOutlined />
                How Nexora Works
              </button>

            </div>

            <div className="hero-trust">

              <div className="trust-item">
                <CheckCircleFilled />
                <span>Practical learning</span>
              </div>

              <div className="trust-item">
                <CheckCircleFilled />
                <span>Industry experts</span>
              </div>

              <div className="trust-item">
                <CheckCircleFilled />
                <span>Career focused</span>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual">

            <div className="visual-orb orb-one"></div>
            <div className="visual-orb orb-two"></div>

            <div className="learning-dashboard">

              <div className="dashboard-header">

                <div>
                  <span className="dashboard-eyebrow">
                    YOUR LEARNING SPACE
                  </span>

                  <h3>Keep growing.</h3>
                </div>

                <div className="dashboard-icon">
                  <ThunderboltFilled />
                </div>

              </div>

              <div className="featured-course">

                <div className="course-symbol">
                  <BookOutlined />
                </div>

                <div className="course-info">
                  <span>CONTINUE LEARNING</span>
                  <strong>Full Stack Development</strong>
                </div>

                <div className="course-progress">
                  <strong>78%</strong>
                  <small>Complete</small>
                </div>

              </div>

              <div className="progress-track">
                <div className="progress-value"></div>
              </div>

              <div className="dashboard-grid">

                <div className="dashboard-stat">

                  <div className="stat-icon">
                    <BookOutlined />
                  </div>

                  <div>
                    <strong>24</strong>
                    <span>Courses</span>
                  </div>

                </div>

                <div className="dashboard-stat">

                  <div className="stat-icon">
                    <RiseOutlined />
                  </div>

                  <div>
                    <strong>10K+</strong>
                    <span>Learners</span>
                  </div>

                </div>

              </div>

              <div className="dashboard-bottom">

                <span>Next milestone</span>

                <strong>
                  Build your first real-world project
                </strong>

                <div className="milestone-line">
                  <span></span>
                </div>

              </div>

            </div>

            <div className="floating-learning-card">

              <div className="floating-avatar">
                N
              </div>

              <div>
                <span>Learning with purpose</span>
                <strong>10,000+ learners</strong>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FEATURED COURSES
      ========================= */}

      <section className="featured-courses-section">

        <div className="section-container">

          <div className="section-heading">

            <div>

              <span className="section-eyebrow">
                EXPLORE NEXORA
              </span>

              <h2>
                Learn something
                <br />
                <span>worth knowing.</span>
              </h2>

            </div>

            <div className="section-heading-right">

              <p>
                Practical courses designed to help you build
                skills that matter in the real world.
              </p>

              <a
                href="/courses"
                className="view-all-link"
              >
                View all courses
                <ArrowRightOutlined />
              </a>

            </div>

          </div>


          {/* COURSE CARDS */}

          <div className="courses-grid">

            {courses
              .filter((course) => course.featured)
              .map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}

          </div>

        </div>

      </section>


      {/* =========================
          STATS
      ========================= */}

      <section className="stats-section">

        <div className="stats-container">

          <div className="stats-intro">
            <span>WHY NEXORA</span>
            <strong>
              Built for ambitious learners.
            </strong>
          </div>

          <div className="stat-box">
            <strong>10K+</strong>
            <span>Students</span>
          </div>

          <div className="stat-box">
            <strong>25+</strong>
            <span>Courses</span>
          </div>

          <div className="stat-box">
            <strong>40+</strong>
            <span>Instructors</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;