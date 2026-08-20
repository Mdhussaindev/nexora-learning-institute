
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  SignalFilled,
  UserOutlined,
  BookOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

import { Link, useNavigate, useParams } from "react-router-dom";

import courses from "../../data/courses";

import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => String(item.id) === String(id)
  );

  if (!course) {
    return (
      <main className="course-details-page course-not-found">
        <div className="course-not-found-card">
          <span className="details-eyebrow">NEXORA LEARNING</span>

          <div className="not-found-icon">
            <BookOutlined />
          </div>

          <h1>Course not found.</h1>

          <p>
            The course you are looking for may no longer be available
            or the URL may be incorrect.
          </p>

          <button
            type="button"
            className="details-back-button"
            onClick={() => navigate("/courses")}
          >
            <ArrowLeftOutlined />
            Back to Courses
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="course-details-page">

      <div className="details-container">
        <button
          type="button"
          className="details-back-link"
          onClick={() => navigate("/courses")}
        >
          <ArrowLeftOutlined />
          Back to Courses
        </button>
      </div>


      <section className="course-details-hero">
        <div className="details-container">

          <div className="details-hero-grid">

         
            <div className="details-hero-content">

              <div className="details-category-row">
                <span className="details-eyebrow">
                  {course.category}
                </span>

                {course.featured && (
                  <span className="featured-badge">
                    FEATURED
                  </span>
                )}
              </div>

              <h1>
                {course.name}
              </h1>

              <p className="details-intro">
                {course.description}
              </p>

    
              <div className="details-meta">

                <div className="details-meta-item">
                  <div className="meta-icon">
                    <ClockCircleOutlined />
                  </div>

                  <div>
                    <span>Duration</span>
                    <strong>{course.duration}</strong>
                  </div>
                </div>

                <div className="details-meta-item">
                  <div className="meta-icon">
                    <SignalFilled />
                  </div>

                  <div>
                    <span>Level</span>
                    <strong>{course.level}</strong>
                  </div>
                </div>

                <div className="details-meta-item">
                  <div className="meta-icon">
                    <UserOutlined />
                  </div>

                  <div>
                    <span>Format</span>
                    <strong>Practical</strong>
                  </div>
                </div>

              </div>

            </div>


           
            <div className="details-visual">

              <div className="details-orbit orbit-large"></div>
              <div className="details-orbit orbit-small"></div>

              <div className="course-visual-card">

                <div className="visual-card-top">
                  <span>COURSE {String(course.id).padStart(2, "0")}</span>

                  <div className="visual-course-icon">
                    {course.icon}
                  </div>
                </div>

                <div className="visual-card-middle">
                  <span>LEARN. BUILD. GROW.</span>

                  <h2>
                    {course.shortName}
                  </h2>
                </div>

                <div className="visual-card-bottom">
                  <span>{course.category}</span>

                  <strong>{course.level}</strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="course-information">
        <div className="details-container">

          <div className="course-information-grid">

            {/* LEFT */}
            <div className="course-overview">

              <span className="section-eyebrow">
                COURSE OVERVIEW
              </span>

              <h2>
                Everything you need
                <span>to move forward.</span>
              </h2>

              <p>
                This program is designed around practical learning,
                clear concepts, and real-world application. Build
                confidence by learning skills that you can actually
                use beyond the classroom.
              </p>

              <p>
                You will work through structured learning experiences
                designed to help you understand the fundamentals,
                strengthen your skills, and apply what you learn.
              </p>

            </div>


            <div className="course-features">

              <div className="features-heading">
                <span>WHAT YOU'LL GET</span>

                <SafetyCertificateOutlined />
              </div>

              <div className="feature-list">

                <div className="feature-item">
                  <CheckCircleFilled />
                  <span>Practical, real-world learning</span>
                </div>

                <div className="feature-item">
                  <CheckCircleFilled />
                  <span>Structured learning path</span>
                </div>

                <div className="feature-item">
                  <CheckCircleFilled />
                  <span>Expert-guided instruction</span>
                </div>

                <div className="feature-item">
                  <CheckCircleFilled />
                  <span>Project-focused experience</span>
                </div>

                <div className="feature-item">
                  <CheckCircleFilled />
                  <span>Career-ready skills</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="course-enroll-section">
        <div className="details-container">

          <div className="course-enroll-box">

            <div className="enroll-content">
              <span>READY TO START?</span>

              <h2>
                Take the next step
                <span>with {course.name}.</span>
              </h2>

              <p>
                Start building valuable skills with a practical
                learning experience designed for your growth.
              </p>
            </div>

            <Link
              to="/contact"
              className="enroll-button"
            >
              Enroll Now
              <ArrowRightOutlined />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default CourseDetails;