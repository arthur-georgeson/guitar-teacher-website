import React from "react";
import { Link } from "react-router-dom";
import "./css/Landing.css";

export default function Landing() {
  return (
    <div className="landing d-flex align-items-center vh-100 bg-light">
      <div
        className="container text-center text-md-start"
        style={{
          maxWidth: "1100px", // wider container
          padding: "0 0rem",
        }}
      >
        <div className="row align-items-center">
          {/* Left: Text Section */}
          <div className="col-md-6 mb-6 mb-md-0">
            <h1
              className="display-4 fw-bold mb-3 text-primary"
              style={{ fontSize: "4rem", fontFamily: "Poppins, sans-serif" }}
            >
              Build Confidence on the Guitar 
            </h1>

            <p
              className="lead mb-4 text-secondary"
              style={{ fontSize: "1.3rem", fontFamily: "Poppins, sans-serif" }}
            >
              I’m Arthur — a passionate guitarist based in Sussex.
              I’ve been playing music for over 15 years and love helping others{" "}
              <strong>build confidence, develop good technique,</strong> and most
              importantly — <strong>enjoy playing!</strong>
            </p>

            <p
              className="lead mb-4 text-muted"
              style={{ fontSize: "1.2rem", fontFamily: "Poppins, sans-serif" }}
            >
              Whether you’re a total beginner or just looking to get back into it,
              I’ll tailor lessons to suit your goals, pace, and interests.
            </p>

            <Link
  to="/booking"
  className="btn btn-lg shadow-sm mt-2 cta-button-custom"
>
  Book a Free Trial Lesson
</Link>

          </div>

          {/* Right: Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="/img/me-playing-guitar.jpg"
              alt="Arthur playing guitar"
              className="img-fluid rounded shadow-lg landing-image"
              style={{
                maxWidth: "101%",  // fits the column width
                
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
