import React from "react";
import { Link } from "react-router-dom";
import "./css/Landing.css";

export default function Landing() {
  return (
    <div className="landing">

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
            <h1 className="landing-title">Build Confidence on the Guitar</h1>
            <p className = "landing-intro">
              I’m Arthur — a passionate guitarist based in Sussex.
              I’ve been playing music for over 15 years and love helping others{" "}
              <strong>build confidence, develop good technique,</strong> and most
              importantly — <strong>enjoy playing!</strong>
            </p>

            <p className="landing-intro"
            >
              Whether you’re a total beginner or just looking to get back into it,
              I’ll tailor lessons to suit your goals, pace, and interests.
            </p>

           <a href="/booking" className="btn btn-primary btn-lg shadow-sm">
                Book a Free Trial Lesson
              </a>
          </div>

          {/* Right: Image Section */}
          <div className="col-md-6 text-center">
            <img
              src="/img/me-playing-guitar.jpg"
              alt="Arthur playing guitar"
              className="img-fluid rounded shadow-lg landing-image"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}
