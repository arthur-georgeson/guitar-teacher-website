import React from "react";
import "./css/Services.css";

export default function Services() {
  // Features for all packages
  const commonFeatures = ["Chords", "Scales", "Song practice", "Rhythm"];

  // Common description for all packages
  const commonDescription = 
  "Learn exactly what you want on guitar—songs, techniques, or theory. I’ll tailor each lesson to your goals and provide guidance to help you progress quickly. Plus, your first lesson is completely free!";


  const packages = [
    { title: "1 Lesson", price: "£25", duration: "1 Hour" },
    { title: "5 Lesson Package", price: "£120", duration: "5 Hours" },
    { title: "10 Lesson Package", price: "£220", duration: "10 Hours" },
  ];

  return (
    <div className="services container py-5">
      <h2 className="fw-bold mb-5 text-center display-6">Lesson Services</h2>
      <div className="row g-4">
        {packages.map((pkg, index) => (
          <div key={index} className="col-md-4">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{pkg.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {pkg.price} — {pkg.duration}
                </h6>
                <p className="card-text">{commonDescription}</p>
                <ul className="list-unstyled mt-3 mb-4">
                  {commonFeatures.map((feat, i) => (
                    <li key={i} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="/booking" className="btn btn-primary mt-auto">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-4 text-muted">
        Lessons available in-person around Sussex or online via Zoom.
      </p>
    </div>
  );
}
