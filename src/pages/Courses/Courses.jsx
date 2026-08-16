// import React from "react";
// import {
//   ArrowRightOutlined,
//   ClockCircleOutlined,
//   CodeOutlined,
//   BgColorsOutlined,
//   DatabaseOutlined,
//   CheckCircleOutlined,
// } from "@ant-design/icons";

// import "./Courses.css";

// function Courses() {
//   const courses = [
//     {
//       id: 1,
//       category: "DEVELOPMENT",
//       title: "Full Stack Development",
//       description:
//         "Build modern web applications from frontend interfaces to powerful backend systems.",
//       duration: "16 Weeks",
//       level: "Intermediate",
//       icon: <CodeOutlined />,
//     },
//     {
//       id: 2,
//       category: "FRONTEND",
//       title: "React JS Development",
//       description:
//         "Master React and build fast, scalable, component-based applications for the modern web.",
//       duration: "10 Weeks",
//       level: "Intermediate",
//       icon: <CodeOutlined />,
//     },
//     {
//       id: 3,
//       category: "DESIGN",
//       title: "UI/UX Design",
//       description:
//         "Learn to create intuitive digital experiences with modern UI and user-centered design.",
//       duration: "8 Weeks",
//       level: "Beginner",
//       icon: <BgColorsOutlined />,
//     },
//     {
//       id: 4,
//       category: "BACKEND",
//       title: "Backend Engineering",
//       description:
//         "Learn APIs, databases, authentication and the core concepts behind reliable applications.",
//       duration: "12 Weeks",
//       level: "Intermediate",
//       icon: <DatabaseOutlined />,
//     },
//     {
//       id: 5,
//       category: "DEVELOPMENT",
//       title: "JavaScript Mastery",
//       description:
//         "Strengthen your JavaScript fundamentals and learn the concepts used in real-world projects.",
//       duration: "10 Weeks",
//       level: "Beginner",
//       icon: <CodeOutlined />,
//     },
//     {
//       id: 6,
//       category: "CAREER",
//       title: "Professional Web Development",
//       description:
//         "Build a strong development foundation through practical projects and career-focused learning.",
//       duration: "14 Weeks",
//       level: "Beginner",
//       icon: <CheckCircleOutlined />,
//     },
//   ];

//   return (
//     <main className="courses-page">

//       {/* ================= HERO ================= */}
//       <section className="courses-hero">
//         <div className="courses-container">

//           <div className="courses-hero-content">
//             <div className="courses-badge">
//               <span></span>
//               LEARNING THAT MOVES YOU FORWARD
//             </div>

//             <h1>
//               Skills that turn
//               <br />
//               <span>ambition into progress.</span>
//             </h1>

//             <p>
//               Explore practical courses designed to help you build real-world
//               skills, create meaningful projects, and move confidently toward
//               your career goals.
//             </p>

//             <div className="courses-hero-actions">
//               <a href="#all-courses" className="primary-course-btn">
//                 Explore Courses
//                 <ArrowRightOutlined />
//               </a>

//               <a href="#why-nexora" className="secondary-course-btn">
//                 Why Nexora?
//               </a>
//             </div>
//           </div>

//           {/* Hero Visual */}
//           <div className="courses-hero-visual">

//             <div className="visual-glow"></div>

//             <div className="learning-card">

//               <div className="learning-card-top">
//                 <span>YOUR LEARNING PATH</span>
//                 <span className="live-dot">
//                   <i></i> LIVE
//                 </span>
//               </div>

//               <div className="learning-main">
//                 <div className="learning-icon">
//                   <CodeOutlined />
//                 </div>

//                 <div>
//                   <small>CURRENT FOCUS</small>
//                   <h3>Full Stack Development</h3>
//                   <p>Build. Practice. Improve.</p>
//                 </div>
//               </div>

//               <div className="learning-progress">
//                 <div className="progress-heading">
//                   <span>Learning progress</span>
//                   <strong>78%</strong>
//                 </div>

//                 <div className="progress-track">
//                   <div></div>
//                 </div>
//               </div>

//               <div className="learning-footer">
//                 <div>
//                   <strong>12</strong>
//                   <span>Projects</span>
//                 </div>

//                 <div>
//                   <strong>24</strong>
//                   <span>Lessons</span>
//                 </div>

//                 <div>
//                   <strong>08</strong>
//                   <span>Weeks</span>
//                 </div>
//               </div>
//             </div>

//             <div className="floating-card">
//               <div className="floating-icon">
//                 <CheckCircleOutlined />
//               </div>

//               <div>
//                 <strong>10,000+</strong>
//                 <span>Active learners</span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= INTRO ================= */}
//       <section className="courses-intro">
//         <div className="courses-container intro-grid">

//           <div className="intro-label">
//             <span>01</span>
//             OUR COURSES
//           </div>

//           <div className="intro-content">
//             <h2>
//               Learn skills that
//               <span> actually matter.</span>
//             </h2>

//             <p>
//               Nexora courses are built around practical learning. Instead of
//               simply watching lessons, you learn concepts, apply them through
//               projects, and develop the confidence to use your skills in the
//               real world.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ================= COURSES GRID ================= */}
//       <section className="all-courses-section" id="all-courses">
//         <div className="courses-container">

//           <div className="section-heading">
//             <div>
//               <span className="section-eyebrow">EXPLORE NEXORA</span>

//               <h2>
//                 Find your next
//                 <span> skill.</span>
//               </h2>
//             </div>

//             <p>
//               Choose a learning path that matches your goals and start
//               building something meaningful.
//             </p>
//           </div>

//           <div className="courses-grid">

//             {courses.map((course) => (
//               <article className="course-card" key={course.id}>

//                 <div className="course-card-top">
//                   <span className="course-category">
//                     {course.category}
//                   </span>

//                   <div className="course-icon">
//                     {course.icon}
//                   </div>
//                 </div>

//                 <div className="course-card-body">
//                   <h3>{course.title}</h3>

//                   <p>{course.description}</p>

//                   <div className="course-info">
//                     <span>
//                       <ClockCircleOutlined />
//                       {course.duration}
//                     </span>

//                     <span>{course.level}</span>
//                   </div>
//                 </div>

//                 <div className="course-card-bottom">
//                   <button>
//                     View Details
//                     <ArrowRightOutlined />
//                   </button>
//                 </div>

//               </article>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* ================= WHY NEXORA ================= */}
//       <section className="why-courses" id="why-nexora">
//         <div className="courses-container">

//           <div className="why-grid">

//             <div className="why-dark-card">
//               <span className="section-eyebrow light">
//                 THE NEXORA APPROACH
//               </span>

//               <h2>
//                 More than courses.
//                 <br />
//                 <span>A better way to learn.</span>
//               </h2>

//               <p>
//                 Every learning experience is designed to take you from
//                 understanding a concept to confidently applying it.
//               </p>

//               <div className="why-steps">
//                 <div>
//                   <strong>01</strong>
//                   <span>Learn</span>
//                 </div>

//                 <div>
//                   <strong>02</strong>
//                   <span>Build</span>
//                 </div>

//                 <div>
//                   <strong>03</strong>
//                   <span>Grow</span>
//                 </div>
//               </div>
//             </div>

//             <div className="why-features">

//               <div className="why-feature">
//                 <div>01</div>
//                 <h3>Practical Curriculum</h3>
//                 <p>
//                   Learn concepts through practical examples and meaningful
//                   projects.
//                 </p>
//               </div>

//               <div className="why-feature">
//                 <div>02</div>
//                 <h3>Expert Guidance</h3>
//                 <p>
//                   Learn from instructors who understand modern technology and
//                   real-world workflows.
//                 </p>
//               </div>

//               <div className="why-feature">
//                 <div>03</div>
//                 <h3>Career Focused</h3>
//                 <p>
//                   Develop skills that help you become confident and
//                   career-ready.
//                 </p>
//               </div>

//               <div className="why-feature">
//                 <div>04</div>
//                 <h3>Modern Learning</h3>
//                 <p>
//                   Stay aligned with current tools, technologies, and industry
//                   practices.
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="courses-final-cta">
//         <div className="courses-container">

//           <div className="final-cta-content">
//             <span>READY TO START?</span>

//             <h2>
//               Your next skill
//               <br />
//               <span>starts here.</span>
//             </h2>

//             <p>
//               Choose a course, start learning, and take the next step toward
//               your future.
//             </p>

//             <a href="#all-courses">
//               Explore Courses
//               <ArrowRightOutlined />
//             </a>
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }

// export default Courses;

