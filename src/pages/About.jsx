import React from "react";
import "./css/About.css";


export default function About() {
  return (
    <div className="about container py-5">
      <div className="row align-items-center mb-5">
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="/img/picture-me.jpg"
            alt="Arthur playing guitar"
            className="img-fluid rounded-circle shadow-lg about-profile"
          />
        </div>

        {/* About Me Text */}
        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-0">
            <h2 className="fw-bold mb-3 display-6 text-center text-md-start">About Me</h2>
            <p className="lead mb-3">
              Hi, I’m Arthur — I’ve been playing music for around <strong>15 years</strong>, starting with piano before picking up the guitar. I’ve played in bands, made guest appearances with acts such as <strong>David Devant and his Spirit Wife</strong>, and feature on recordings with <strong>The Middle People</strong>.
            </p>
            <p className="lead mb-3">
              I work full-time in <strong>Horsham</strong> as an engineer in renewable energy technology, and playing guitar is how I relax and express myself. Over the years I’ve developed tips and techniques that have helped me progress — and I love sharing these with students.
            </p>
            <p className="lead mb-3">
              As a teacher, I focus on helping you <span className="text-primary fw-semibold">unlock your hidden creative talent</span>, build <span className="text-success fw-semibold">confidence and solid technique</span>, and enjoy every step of your musical journey.
            </p>
            <p className="text-center mt-3">
              <a href="/booking" className="btn btn-primary btn-lg shadow-sm">
                Book a Free Trial Lesson
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* My Approach Section */}
      <div className="row">
        <div className="col">
          <div className="card shadow-sm border-0 p-4 mb-5">
            <h3 className="fw-bold mb-3 text-primary">My Approach & Where I Teach</h3>
            <p className="lead mb-3">
              I’m based in <strong>Horsham</strong> and offer both <span className="fw-semibold text-success">in-person</span> and <span className="fw-semibold text-success">online lessons</span> via Zoom — so you can learn wherever you feel most comfortable.
            </p>
            <p className="lead mb-3">
              Every student gets a <span className="fw-semibold text-primary">tailored learning plan</span> based on your goals and skill level. I share practical <span className="text-warning fw-semibold">tips, exercises, and habits</span> that helped me improve, so you can progress faster and play with confidence.
            </p>
            <p className="lead">
              My approach is all about making learning <span className="fw-semibold text-success">fun, creative, and effective</span>, whether you’re a beginner or looking to refine your skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
