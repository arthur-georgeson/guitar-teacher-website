import React from "react";
import { Link } from "react-router-dom";
import "./css/Landing.css";

export default function Landing() {
  return (
    <div className="landing d-flex align-items-center justify-content-center text-center vh-100 bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">
          Learn Guitar with Confidence 🎶
        </h1>
        <p className="lead mb-4">
          Personalized guitar lessons for all levels — from your first chord to your first solo.
        </p>
        <Link to="/booking" className="btn btn-primary btn-lg shadow cta-button">
          Book a Free Trial Lesson
        </Link>
      </div>
    </div>
  );
}
