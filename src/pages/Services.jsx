import React from "react";
import "./css/Services.css";

export default function Services() {
  const packages = [
    {
      title: "One-off Lesson",
      price: "£25",
      duration: "1 Hour",
      features: ["Chords", "Rhythm", "Song basics"],
    },
    {
      title: "5 Lesson Package",
      price: "£120",
      duration: "5 Hours",
      features: ["Chords", "Scales", "Improvisation", "Song practice"],
    },
    {
      title: "10 Lesson Package",
      price: "£220",
      duration: "10 Hours",
      features: ["Advanced theory", "Soloing", "Composition", "Performance coaching"],
    },
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
                <h6 className="card-subtitle mb-2 text-muted">{pkg.price} — {pkg.duration}</h6>
                <ul className="list-unstyled mt-3 mb-4">
                  {pkg.features.map((feat, i) => (
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
        Lessons available in-person around Bristol or online via Zoom.
      </p>
    </div>
  );
}
