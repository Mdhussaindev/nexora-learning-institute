import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  SignalFilled,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-top">
        <div className="course-card-icon">{course.icon}</div>

        <span className="course-category">{course.category}</span>
      </div>

      <div className="course-card-content">
        <h3>{course.name}</h3>

        <p>{course.description}</p>
      </div>

      <div className="course-meta">
        <div>
          <ClockCircleOutlined />
          <span>{course.duration}</span>
        </div>

        <div>
          <SignalFilled />
          <span>{course.level}</span>
        </div>
      </div>

      <div className="course-card-footer">
        <Link to={`/courses/${course.id}`} className="course-details-link">
          View Details
          <ArrowRightOutlined />
        </Link>

        <span className="course-number">
          {String(course.id).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}

export default CourseCard;