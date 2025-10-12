import React from "react";
import "./css/About.css";

export default function About() {
  return (
    <div className="about container py-5">
      <div className="row align-items-center">
        {/* Optional image section */}
        <div className="col-md-4 mb-4 mb-md-0 text-center">
          <img
            src="https://via.placeholder.com/250x250.png?text=Arthur+Guitar"
            alt="Arthur playing guitar"
            className="img-fluid rounded-circle shadow"
          />
        </div>

        <div className="col-md-8">
          <h2 className="fw-bold mb-3 display-6">About Me</h2>
          <p className="lead">
            Hi, I’m Arthur — a professional guitarist with over 10 years of performance and teaching experience. I’ve played in jazz bands, rock groups, and solo acoustic projects across the UK.
          </p>
          <p className="lead">
            My teaching philosophy focuses on <span className="text-primary fw-semibold">fun, technique, and creative confidence</span> — helping each student find their unique sound.
          </p>
        </div>
      </div>
    </div>
  );
}
