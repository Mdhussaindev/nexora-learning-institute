import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link, useNavigate, useParams } from "react-router-dom";

import instructors from "../../data/instructors";

import "./InstructorDetails.css";

function InstructorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const instructor = instructors.find(
    (item) => String(item.id) === String(id)
  );

  if (!instructor) {
    return (
      <main className="instructor-details-not-found">
        <div className="instructor-not-found-card">

          <span> NEXORA INSTRUCTORS </span>

          <h1>Instructor not found.</h1>

          <p>
            The instructor profile you are looking for
            could not be found.
          </p>

          <button
            type="button"
            onClick={() => navigate("/instructors")}
          >
            <ArrowLeftOutlined />
            Back to Instructors
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="instructor-details-page">

      {/* BACK */}
      <div className="instructor-details-container">
        <button
          type="button"
          className="instructor-back-button"
          onClick={() => navigate("/instructors")}
        >
          <ArrowLeftOutlined />
          Back to Instructors
        </button>
      </div>


      {/* HERO */}
      <section className="instructor-details-hero">

        <div className="instructor-details-container">

          <div className="instructor-details-grid">

            {/* IMAGE */}
            <div className="instructor-profile-image">
              <img
                src={instructor.image}
                alt={instructor.name}
              />

              <div className="profile-image-label">
                <span>EXPERT</span>
                <strong>{instructor.experience}</strong>
              </div>
            </div>


            {/* CONTENT */}
            <div className="instructor-profile-content">

              <span className="profile-eyebrow">
                NEXORA EXPERT
              </span>

              <h1>{instructor.name}</h1>

              <h2>{instructor.designation}</h2>

              <p>
                {instructor.bio}
              </p>


              <div className="profile-info-grid">

                <div>
                  <UserOutlined />
                  <span>Expertise</span>
                  <strong>{instructor.expertise}</strong>
                </div>

                <div>
                  <ClockCircleOutlined />
                  <span>Experience</span>
                  <strong>{instructor.experience}</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* EXPERTISE */}
      <section className="instructor-expertise-section">

        <div className="instructor-details-container">

          <div className="instructor-expertise-grid">

            <div>
              <span className="profile-eyebrow">
                TEACHING APPROACH
              </span>

              <h2>
                Real experience.
                <span>Practical guidance.</span>
              </h2>
            </div>

            <div className="profile-benefits">

              <div>
                <CheckCircleFilled />
                <span>Practical project-based learning</span>
              </div>

              <div>
                <CheckCircleFilled />
                <span>Industry-focused knowledge</span>
              </div>

              <div>
                <CheckCircleFilled />
                <span>Clear and structured guidance</span>
              </div>

              <div>
                <CheckCircleFilled />
                <span>Career-oriented mentorship</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="instructor-details-cta">

        <div className="instructor-details-container">

          <div className="instructor-details-cta-box">

            <div>
              <span>READY TO LEARN?</span>

              <h2>
                Start your journey
                <em>with Nexora.</em>
              </h2>
            </div>

            <Link to="/courses">
              Explore Courses
              <ArrowRightOutlined />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default InstructorDetails;