import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  BarChartOutlined,
  CodeOutlined,
  BgColorsOutlined,
  GlobalOutlined,
  DatabaseOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import "./CourseCard.css";

const CourseCard = ({ course }) => {

  const getCourseIcon = () => {
    const text = `${course.category || ""} ${course.title || ""}`.toLowerCase();

    if (
      text.includes("design") ||
      text.includes("ui") ||
      text.includes("ux")
    ) {
      return <BgColorsOutlined />;
    }

    if (
      text.includes("marketing") ||
      text.includes("digital")
    ) {
      return <GlobalOutlined />;
    }

    if (
      text.includes("python") ||
      text.includes("javascript") ||
      text.includes("react") ||
      text.includes("development") ||
      text.includes("programming")
    ) {
      return <CodeOutlined />;
    }

    if (
      text.includes("data") ||
      text.includes("database")
    ) {
      return <DatabaseOutlined />;
    }

    return <ThunderboltOutlined />;
  };

  return (
    <article className="course-card">


      <div className="course-card-top">

        <div className="course-icon">
          {getCourseIcon()}
        </div>

        <span className="course-number">
          {String(course.id).padStart(2, "0")}
        </span>

      </div>


      <div className="course-card-content">

        <span className="course-category">
          {course.category || "Professional Program"}
        </span>

        <h3 className="course-title">
          {course.title}
        </h3>

        <p className="course-description">
          {course.description}
        </p>

      </div>


      <div className="course-meta">

        <div className="course-meta-item">
          <ClockCircleOutlined />

          <span>
            {course.duration || "12 Weeks"}
          </span>
        </div>

        <div className="course-meta-item">
          <BarChartOutlined />

          <span>
            {course.level || "Intermediate"}
          </span>
        </div>

      </div>


      <div className="course-card-footer">

        <Link
          to={`/courses/${course.id}`}
          className="course-details-link"
        >
          <span>View Details</span>

          <span className="course-arrow">
            <ArrowRightOutlined />
          </span>
        </Link>

      </div>

    </article>
  );
};

export default CourseCard;