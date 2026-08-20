import React from "react";
import {
  ArrowRightOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import instructors from "../../data/instructors";
import "./Instructors.css";

const Instructors = () => {
  return (
    <main className="instructors-page">

      <section className="instructors-hero">

        <div className="instructors-hero-glow glow-one"></div>
        <div className="instructors-hero-glow glow-two"></div>

        <div className="instructors-hero-content">

          <div className="instructors-eyebrow">
            <TeamOutlined />
            <span>Meet Our Experts</span>
          </div>

          <h1>
            Learn From
            <span> Industry Experts.</span>
          </h1>

          <p>
            Learn from experienced professionals who bring real-world
            knowledge, practical skills, and industry insights directly
            into your learning journey.
          </p>

          <div className="instructors-hero-stats">

            <div>
              <strong>25+</strong>
              <span>Expert Instructors</span>
            </div>

            <div>
              <strong>15K+</strong>
              <span>Students Taught</span>
            </div>

            <div>
              <strong>4.9</strong>
              <span>Average Rating</span>
            </div>

          </div>

        </div>
      </section>

      <section className="instructors-section">

        <div className="instructors-section-heading">

          <div>
            <span className="section-label">
              OUR INSTRUCTORS
            </span>

            <h2>
              Meet the people behind
              <span> your growth.</span>
            </h2>
          </div>

          <p>
            Our instructors combine professional experience with a
            passion for teaching, helping you build skills that matter
            in the real world.
          </p>

        </div>


        <div className="instructors-grid">

          {instructors.map((instructor) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
            />
          ))}

        </div>

      </section>


      <section className="instructors-cta">

        <div className="cta-glow"></div>

        <div className="cta-content">

          <span className="cta-label">
            READY TO START?
          </span>

          <h2>
            Learn from experts.
            <br />
            Build your future.
          </h2>

          <p>
            Explore our courses and start learning from professionals
            who know what it takes to succeed.
          </p>

          <a href="/courses" className="cta-button">
            Explore Courses
            <ArrowRightOutlined />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Instructors;