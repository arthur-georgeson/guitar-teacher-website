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
          As a teacher, I focus on helping you <span className="fw-semibold">unlock your hidden creative talent</span>, build <span className="fw-semibold">confidence and solid technique</span>, and enjoy every step of your musical journey.
        </p>
        <p className="text-center mt-3">
          <a href="/booking" className="btn">
            Book a Free Trial Lesson
          </a>
        </p>
      </div>

      {/* Optional: My Approach Section */}
      <div className="card">
        <h3>My Approach & Where I Teach</h3>
        <p className="lead">
          I’m based in <strong>Horsham</strong> and offer both <span className="fw-semibold">in-person</span> and <span className="fw-semibold">online lessons</span> via Zoom — so you can learn wherever you feel most comfortable.
        </p>
        <p className="lead">
          Every student gets a <span className="fw-semibold">tailored learning plan</span> based on your goals and skill level. I share practical <span className="fw-semibold">tips, exercises, and habits</span> that helped me improve, so you can progress faster and play with confidence.
        </p>
        <p className="lead">
          My approach is all about making learning <span className="fw-semibold">fun, creative, and effective</span>, whether you’re a beginner or looking to refine your skills.
        </p>
      </div>
    </div>
  );
}
