import React from "react";
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
            <p className="landing-intro">
            I’m Arthur — a guitarist based in Sussex. I’ve been playing for over 10 years and focus on helping beginners get comfortable with the basics, build solid technique, and actually enjoy practicing from the start.
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
