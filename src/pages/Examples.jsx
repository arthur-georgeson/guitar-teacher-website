import React from "react";
import "./css/Examples.css";

export default function Examples() {
  const examples = [
    {
      title: "It's Rush Hour",
      src: "https://www.bandlab.com/embed/?id=e8ef4714-a364-ef11-bdfd-000d3a425266",
      note: "",
    },
    {
      title: "Hello John - Goodbye my Twin",
      src: "https://www.bandlab.com/embed/?id=65be8178-6c31-ef11-86c3-002248495042",
      note: "Skip to 3:25 for my Solo.",
    },
  ];

  return (
    <div className="examples container py-5">
      <h2 className="text-center fw-bold mb-4 display-6">Guitar Examples</h2>
      <p className="text-center lead mb-5">
        Here are some of my performances in tracks by <strong>The Middle People</strong>
      </p>

      <div className="row g-4">
        {examples.map((video, index) => (
          <div key={index} className="col-md-6">
            <div className="card shadow-sm border-0 h-100 p-3">
              <iframe
                src={video.src}
                width="100%"
                height="202"
                frameBorder="0"
                allowFullScreen
                title={video.title}
                className="mb-2"
              ></iframe>
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{video.title}</h5>
                {video.note && <p className="text-muted small">{video.note}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
