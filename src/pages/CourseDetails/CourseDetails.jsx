import React from "react";
import "./Courses.css";

function Courses() {
  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="courses-container">
          <div className="courses-hero-content">
            <div className="courses-eyebrow">
              Learn. Build. Grow.
            </div>

            <h1>
              Explore courses designed
              <span> for what comes next.</span>
            </h1>

            <p>
              Build practical skills through carefully designed courses,
              expert guidance, and learning experiences focused on real-world
              growth.
            </p>
          </div>

          <div className="courses-hero-card">
            <span>YOUR LEARNING PATH</span>

            <h3>Build your next skill</h3>

            <p>
              Choose a practical course and move one step closer to your
              career goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Courses;