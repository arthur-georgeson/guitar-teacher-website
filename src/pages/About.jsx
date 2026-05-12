import React from "react";
import "./css/About.css";

export default function About() {
  return (
    <div className="about">
      {/* Profile Image */}
      <img
        src="/img/picture-me.jpg"
        alt="Arthur playing guitar"
        className="about-profile"
      />

      {/* About Me Text */}
      <div className="card">
        <h2>About Me</h2>
<p className="lead">
  Hi, I’m Arthur — I’ve been playing music for around <strong>10 years</strong>, starting on piano before moving to guitar. I’ve played in bands and worked on recordings along the way.
</p>

<p className="lead">
  These days, I focus on helping newer players get comfortable with the basics, avoid common mistakes, and make steady progress without it feeling overwhelming.
</p>

<p className="lead">
  Lessons are relaxed and practical — we’ll build your confidence, improve your technique, and get you playing music you actually enjoy.
</p>

<p className="text-center mt-3 small fst-italic">
  “Friendly, patient and makes lessons relaxed and stress-free — I’ve made solid progress as a beginner.”
</p>

<p className="text-center mt-3">
  <a href="/booking" className="btn">
    Book a Free Trial Lesson
  </a>
</p>
      </div>

    </div>
  );
}
