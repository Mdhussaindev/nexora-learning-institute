import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import "./InstructorCard.css";

const InstructorCard = ({ instructor }) => {
  return (
    <article className="instructor-card">

      <div className="instructor-image-wrapper">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="instructor-image"
        />

        <div className="instructor-rating">
          <StarFilled />
          <span>{instructor.rating}</span>
        </div>

        <div className="instructor-overlay">
          <Link
            to={`/instructors/${instructor.id}`}
            className="instructor-profile-btn"
          >
            View Profile
            <ArrowRightOutlined />
          </Link>
        </div>
      </div>

      <div className="instructor-content">

        <span className="instructor-role">
          {instructor.role}
        </span>

        <h3>{instructor.name}</h3>

        <p className="instructor-expertise">
          {instructor.expertise}
        </p>

        <div className="instructor-meta">

          <div className="meta-item">
            <strong>{instructor.experience}</strong>
            <span>Experience</span>
          </div>

          <div className="meta-divider"></div>

          <div className="meta-item">
            <strong>{instructor.students}</strong>
            <span>
              <UserOutlined /> Students
            </span>
          </div>

        </div>

        <Link
          to={`/instructors/${instructor.id}`}
          className="instructor-learn-more"
        >
          Explore Instructor
          <ArrowRightOutlined />
        </Link>

      </div>
    </article>
  );
};

export default InstructorCard;