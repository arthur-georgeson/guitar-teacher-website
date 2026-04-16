import React from "react";
import "./css/Examples.css";

export default function Examples() {
  // 🔥 Your BEST videos (replace with your YouTube embed links)
  const featuredVideos = [
    {
      title: "Lead Guitar Showcase",
      src: "https://www.youtube.com/embed/hVscP9BTNvY",
    },
    {
      title: "Blues Improvisation",
      src: "https://www.youtube.com/embed/iX4NCeJmfr8?si=l5ZPqhINelfMgypQ",
    },
    {
      title: "Nothing Else Matters Cover",
      src: "https://www.youtube.com/embed/s9kqThNHeT8?si=CjsCbtXNRQK4_iOw",
    },
    {
      title: "Finger Style Playing (The Boxer)",
      src: "https://www.youtube.com/embed/eMhVvFtTi1k?si=GdFt3N-EPGv1DwtC",
    },
  ];

  // 🎵 Your existing band tracks
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

      {/* 🔥 FEATURED SECTION */}
      <h2 className="text-center fw-bold mb-4 display-6">
        Featured Guitar Examples
      </h2>
      <p className="text-center lead mb-5">
        A selection of my playing across different styles and techniques.
      </p>

      <div className="row g-4 mb-5">
        {featuredVideos.map((video, index) => (
          <div key={index} className="col-md-6">
            <div className="card shadow-sm border-0 h-100 p-3">
              <iframe
                src={video.src}
                width="100%"
                height="250"
                frameBorder="0"
                allowFullScreen
                title={video.title}
                className="mb-2"
              ></iframe>
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🎵 BAND WORK SECTION */}
      <h2 className="text-center fw-bold mb-4 display-6">
        Recorded Work
      </h2>
      <p className="text-center lead mb-5">
        Guitar work featured in tracks by <strong>The Middle People</strong>.
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
                {video.note && (
                  <p className="text-muted small">{video.note}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}