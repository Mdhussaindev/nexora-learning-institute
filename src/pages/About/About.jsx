import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CompassOutlined,
  FlagOutlined,
  TeamOutlined,
  BookOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-container">

          <div className="about-hero-content">

            <span className="section-eyebrow">
              ABOUT NEXORA
            </span>

            <h1>
              Learning built for
              <br />
              <span>what comes next.</span>
            </h1>

            <p>
              Nexora Learning Institute is a modern education platform
              focused on practical skills, expert guidance, and
              career-ready learning experiences.
            </p>

            <div className="about-hero-meta">

              <div>
                <strong>10K+</strong>
                <span>Learners</span>
              </div>

              <div>
                <strong>25+</strong>
                <span>Courses</span>
              </div>

              <div>
                <strong>40+</strong>
                <span>Experts</span>
              </div>

            </div>

          </div>


          <div className="about-hero-visual">

            <div className="about-orbit orbit-one"></div>
            <div className="about-orbit orbit-two"></div>

            <div className="about-main-card">

              <div className="about-card-top">

                <span>NEXORA</span>

                <div className="about-card-icon">
                  <RiseOutlined />
                </div>

              </div>

              <div className="about-card-center">

                <div className="about-number">
                  01
                </div>

                <h3>
                  Learn.
                  <br />
                  Build.
                  <br />
                  Grow.
                </h3>

              </div>

              <div className="about-card-bottom">

                <span>OUR APPROACH</span>

                <strong>
                  Practical learning for real-world growth.
                </strong>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="about-introduction">
        <div className="about-container">

          <div className="about-intro-grid">

            <div className="about-intro-heading">

              <span className="section-eyebrow">
                WHO WE ARE
              </span>

              <h2>
                Education should
                <br />
                <span>create momentum.</span>
              </h2>

            </div>

            <div className="about-intro-text">

              <p className="about-large-text">
                We believe learning becomes powerful when knowledge
                turns into action.
              </p>

              <p>
                Nexora brings together structured courses, practical
                projects, and experienced instructors to create an
                environment where students can learn with clarity and
                confidence.
              </p>

              <p>
                From foundational concepts to modern technologies,
                our programs are designed to help learners continuously
                improve and prepare for the opportunities ahead.
              </p>

            </div>

          </div>

        </div>
      </section>


      <section className="mission-section">

        <div className="about-container">

          <div className="mission-grid">

           
            <div className="mission-card">

              <div className="mission-card-header">

                <div className="mission-icon">
                  <CompassOutlined />
                </div>

                <span>OUR MISSION</span>

              </div>

              <h3>
                Make practical education
                <span> accessible and meaningful.</span>
              </h3>

              <p>
                Our mission is to help learners develop relevant
                skills through clear teaching, hands-on practice,
                and learning experiences that connect education
                with real-world challenges.
              </p>

            </div>


            <div className="mission-card vision-card">

              <div className="mission-card-header">

                <div className="mission-icon">
                  <FlagOutlined />
                </div>

                <span>OUR VISION</span>

              </div>

              <h3>
                Build a generation of
                <span> confident creators.</span>
              </h3>

              <p>
                We envision a learning ecosystem where students
                are equipped to think creatively, solve problems,
                and confidently turn their skills into meaningful
                opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="about-stats">

        <div className="about-container">

          <div className="about-stats-header">

            <span className="section-eyebrow">
              NEXORA BY THE NUMBERS
            </span>

            <h2>
              Growing with every
              <span> learner.</span>
            </h2>

          </div>


          <div className="about-stats-grid">

            <div className="about-stat">
              <strong>10K+</strong>
              <span>Students</span>
            </div>

            <div className="about-stat">
              <strong>25+</strong>
              <span>Courses</span>
            </div>

            <div className="about-stat">
              <strong>40+</strong>
              <span>Instructors</span>
            </div>

            <div className="about-stat">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

      </section>

      <section className="student-choice-section">

        <div className="about-container">

          <div className="student-choice-header">

            <div>

              <span className="section-eyebrow">
                WHY STUDENTS CHOOSE US
              </span>

              <h2>
                Designed around
                <br />
                <span>your progress.</span>
              </h2>

            </div>

            <p>
              Everything at Nexora is designed to make learning
              simpler, more practical, and more focused on progress.
            </p>

          </div>


          <div className="student-choice-grid">

            <div className="choice-item">

              <div className="choice-icon">
                <BookOutlined />
              </div>

              <div>
                <span>01</span>
                <h3>Practical Curriculum</h3>
                <p>
                  Learn concepts through practical examples,
                  exercises, and real-world projects.
                </p>
              </div>

            </div>


            <div className="choice-item">

              <div className="choice-icon">
                <TeamOutlined />
              </div>

              <div>
                <span>02</span>
                <h3>Expert Guidance</h3>
                <p>
                  Learn from instructors with experience across
                  modern technologies and professional workflows.
                </p>
              </div>

            </div>


            <div className="choice-item">

              <div className="choice-icon">
                <RiseOutlined />
              </div>

              <div>
                <span>03</span>
                <h3>Career Growth</h3>
                <p>
                  Develop skills that help you become more confident
                  and prepared for future opportunities.
                </p>
              </div>

            </div>

            <div className="choice-item">

              <div className="choice-icon">
                <CheckCircleFilled />
              </div>

              <div>
                <span>04</span>
                <h3>Focused Learning</h3>
                <p>
                  Follow a clear learning path without unnecessary
                  complexity or distractions.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="about-cta">

        <div className="about-container">

          <div className="about-cta-box">

            <div>

              <span>
                START YOUR JOURNEY
              </span>

              <h2>
                Your next skill
                <br />
                starts here.
              </h2>

            </div>

            <a href="/courses">
              Explore Courses
              <ArrowRightOutlined />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;