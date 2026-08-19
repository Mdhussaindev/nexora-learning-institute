// import React from "react";
// import {
//   EnvironmentOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   ClockCircleOutlined,
//   ArrowRightOutlined,
//   SendOutlined,
// } from "@ant-design/icons";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <main className="contact-page">

//       {/* =========================
//           HERO SECTION
//       ========================== */}

//       <section className="contact-hero">

//         <div className="contact-hero-glow contact-glow-one"></div>
//         <div className="contact-hero-glow contact-glow-two"></div>

//         <div className="contact-hero-content">

//           <span className="contact-eyebrow">
//             <MailOutlined />
//             Get In Touch
//           </span>

//           <h1>
//             Let's Build Your
//             <span> Future Together.</span>
//           </h1>

//           <p>
//             Have a question about our courses, instructors, or learning
//             programs? Our team is here to help you take the next step.
//           </p>

//         </div>

//       </section>


//       {/* =========================
//           CONTACT CONTENT
//       ========================== */}

//       <section className="contact-section">

//         <div className="contact-grid">

//           {/* LEFT SIDE */}

//           <div className="contact-info">

//             <span className="contact-section-label">
//               CONTACT NEXORA
//             </span>

//             <h2>
//               We would love to
//               <span> hear from you.</span>
//             </h2>

//             <p className="contact-intro">
//               Whether you are looking for the right course, need help
//               with enrollment, or simply want to learn more about Nexora,
//               feel free to reach out.
//             </p>


//             {/* CONTACT ITEMS */}

//             <div className="contact-details">

//               <div className="contact-detail-card">

//                 <div className="contact-icon">
//                   <EnvironmentOutlined />
//                 </div>

//                 <div>
//                   <span>Visit Us</span>
//                   <strong>
//                     21 Learning Avenue, Karachi
//                   </strong>
//                 </div>

//               </div>


//               <div className="contact-detail-card">

//                 <div className="contact-icon">
//                   <MailOutlined />
//                 </div>

//                 <div>
//                   <span>Email Us</span>
//                   <strong>
//                     mdhussain.dev00@gmail.com
//                   </strong>
//                 </div>

//               </div>


//               <div className="contact-detail-card">

//                 <div className="contact-icon">
//                   <PhoneOutlined />
//                 </div>

//                 <div>
//                   <span>Call Us</span>
//                   <strong>
//                     +92 348-2237414
//                   </strong>
//                 </div>

//               </div>


//               <div className="contact-detail-card">

//                 <div className="contact-icon">
//                   <ClockCircleOutlined />
//                 </div>

//                 <div>
//                   <span>Office Hours</span>
//                   <strong>
//                     Mon - Fri · 9:00 AM - 6:00 PM
//                   </strong>
//                 </div>

//               </div>

//             </div>

//           </div>


//           {/* RIGHT SIDE FORM */}

//           <div className="contact-form-wrapper">

//             <div className="contact-form-header">

//               <span>START A CONVERSATION</span>

//               <h3>
//                 Send us a message
//               </h3>

//               <p>
//                 Fill out the form below and our team will get back
//                 to you as soon as possible.
//               </p>

//             </div>


//             <form className="contact-form">

//               <div className="form-row">

//                 <div className="form-group">

//                   <label htmlFor="name">
//                     Full Name
//                   </label>

//                   <input
//                     id="name"
//                     type="text"
//                     placeholder="Your full name"
//                   />

//                 </div>


//                 <div className="form-group">

//                   <label htmlFor="email">
//                     Email Address
//                   </label>

//                   <input
//                     id="email"
//                     type="email"
//                     placeholder="you@example.com"
//                   />

//                 </div>

//               </div>


//               <div className="form-group">

//                 <label htmlFor="subject">
//                   Subject
//                 </label>

//                 <input
//                   id="subject"
//                   type="text"
//                   placeholder="How can we help?"
//                 />

//               </div>


//               <div className="form-group">

//                 <label htmlFor="message">
//                   Message
//                 </label>

//                 <textarea
//                   id="message"
//                   rows="6"
//                   placeholder="Tell us a little about what you need..."
//                 ></textarea>

//               </div>


//               <button
//                 type="submit"
//                 className="contact-submit-btn"
//               >
//                 Send Message
//                 <SendOutlined />
//               </button>

//             </form>

//           </div>

//         </div>

//       </section>


//       {/* =========================
//           BOTTOM CTA
//       ========================== */}

//       <section className="contact-cta">

//         <div className="contact-cta-content">

//           <span>
//             STILL HAVE QUESTIONS?
//           </span>

//           <h2>
//             Your next chapter
//             <br />
//             starts here.
//           </h2>

//           <p>
//             Explore our learning programs and find the skills that
//             can move your career forward.
//           </p>

//           <a
//             href="/courses"
//             className="contact-cta-button"
//           >
//             Explore Courses
//             <ArrowRightOutlined />
//           </a>

//         </div>

//       </section>

//     </main>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      message.error("Please fix the highlighted fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate message submission
    setTimeout(() => {
      message.success({
        content: "Your message has been sent successfully!",
        duration: 3,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <main className="contact-page">

      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="contact-hero">

        <div className="contact-hero-glow contact-glow-one"></div>
        <div className="contact-hero-glow contact-glow-two"></div>

        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            <MailOutlined />
            Get In Touch
          </span>

          <h1>
            Let's Build Your
            <span> Future Together.</span>
          </h1>

          <p>
            Have a question about our courses, instructors, or
            learning programs? Our team is here to help you take
            the next step.
          </p>

        </div>

      </section>


      {/* =========================
          CONTACT SECTION
      ========================== */}

      <section className="contact-section">

        <div className="contact-grid">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <span className="contact-section-label">
              CONTACT NEXORA
            </span>

            <h2>
              We would love to
              <span> hear from you.</span>
            </h2>

            <p className="contact-intro">
              Whether you are looking for the right course, need
              help with enrollment, or simply want to learn more
              about Nexora, feel free to reach out.
            </p>


            <div className="contact-details">

              {/* ADDRESS */}

              <div className="contact-detail-card">

                <div className="contact-icon">
                  <EnvironmentOutlined />
                </div>

                <div>
                  <span>Visit Us</span>
                  <strong>
                    21 Learning Avenue, Karachi
                  </strong>
                </div>

              </div>


              {/* EMAIL */}

              <div className="contact-detail-card">

                <div className="contact-icon">
                  <MailOutlined />
                </div>

                <div>
                  <span>Email Us</span>
                  <strong>
                     mdhussain.dev00@gmail.com
                  </strong>
                </div>

              </div>


              {/* PHONE */}

              <div className="contact-detail-card">

                <div className="contact-icon">
                  <PhoneOutlined />
                </div>

                <div>
                  <span>Call Us</span>
                  <strong>
                    +92 3482237414
                  </strong>
                </div>

              </div>


              {/* HOURS */}

              <div className="contact-detail-card">

                <div className="contact-icon">
                  <ClockCircleOutlined />
                </div>

                <div>
                  <span>Office Hours</span>
                  <strong>
                    Mon - Fri · 9:00 AM - 6:00 PM
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              FORM
          ========================== */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <span>
                START A CONVERSATION
              </span>

              <h3>
                Send us a message
              </h3>

              <p>
                Fill out the form below and our team will get
                back to you as soon as possible.
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* NAME + EMAIL */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? "input-error" : ""}
                  />

                  {errors.name && (
                    <span className="form-error">
                      {errors.name}
                    </span>
                  )}

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={errors.email ? "input-error" : ""}
                  />

                  {errors.email && (
                    <span className="form-error">
                      {errors.email}
                    </span>
                  )}

                </div>

              </div>


              {/* SUBJECT */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={errors.subject ? "input-error" : ""}
                />

                {errors.subject && (
                  <span className="form-error">
                    {errors.subject}
                  </span>
                )}

              </div>


              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about what you need..."
                  className={errors.message ? "input-error" : ""}
                ></textarea>

                {errors.message && (
                  <span className="form-error">
                    {errors.message}
                  </span>
                )}

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="contact-submit-btn"
                disabled={isSubmitting}
              >

                {isSubmitting ? (
                  <>
                    Sending...
                    <span className="submit-spinner"></span>
                  </>
                ) : (
                  <>
                    Send Message
                    <SendOutlined />
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =========================
          BOTTOM CTA
      ========================== */}

      <section className="contact-cta">

        <div className="contact-cta-content">

          <span>
            STILL HAVE QUESTIONS?
          </span>

          <h2>
            Your next chapter
            <br />
            starts here.
          </h2>

          <p>
            Explore our learning programs and find the skills
            that can move your career forward.
          </p>

          <a
            href="/courses"
            className="contact-cta-button"
          >
            Explore Courses
            <ArrowRightOutlined />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;