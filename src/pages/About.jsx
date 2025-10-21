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
          Hi, I’m Arthur — I’ve been playing music for around <strong>15 years</strong>, starting with piano before picking up the guitar. I’ve played in bands, made guest appearances with acts such as <strong>David Devant and his Spirit Wife</strong>, and feature on recordings with <strong>The Middle People</strong>.
        </p>
        <p className="lead">
          I work full-time in <strong>Horsham</strong> as an engineer in renewable energy technology, and playing guitar is how I relax and express myself. Over the years I’ve developed tips and techniques that have helped me progress — and I love sharing these with students.
        </p>
       <p className="lead">
  I’ll guide you in building <span className="fw-semibold">confidence</span> and <span className="fw-semibold">technique</span> while encouraging your own <span className="fw-semibold">creativity on the guitar</span>.
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
