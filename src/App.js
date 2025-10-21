import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Examples from "./pages/Examples";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">

          <div className="container">
            {/* Navbar brand / title */}
            <Link className="navbar-brand d-flex align-items-center" to="/">
              
              <span className="fs-3 fw-bold">Arthur Georgeson | Guitarist & Tutor</span>
            </Link>

            {/* Navbar toggler for mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/">
                    <i className="bi bi-house-door me-1"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/about">
                    <i className="bi bi-person me-1"></i> About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/services">
                    <i className="bi bi-gear me-1"></i> Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/examples">
                    <i className="bi bi-music-player-fill me-1"></i> Guitar Examples
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center" to="/booking">
                    <i className="bi bi-calendar-check me-1"></i> Booking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="content container mt-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>

      <footer className="custom-footer text-center py-3 mt-4">

        <p className="mb-0">© {new Date().getFullYear()} Arthur Georgeson | Guitarist & Tutor</p>
      </footer>
    </div>
  );
}
