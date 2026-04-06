import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Examples from "./pages/Examples";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./App.css";

export default function App() {
  const [expanded, setExpanded] = useState(false); // controls mobile collapse

  return (
    <div className="App">
      <header>
        <Navbar 
          expanded={expanded} 
          onToggle={setExpanded} 
          expand="lg" 
          variant="dark" 
          className="custom-navbar shadow-sm"
        >
          <Container>
            <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
              Arthur Georgeson | Guitarist & Tutor
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main-navbar" />

            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                  <i className="bi bi-house-door me-1"></i> Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                  <i className="bi bi-person me-1"></i> About
                </Nav.Link>
                <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
                  <i className="bi bi-gear me-1"></i> Services
                </Nav.Link>
                <Nav.Link as={Link} to="/examples" onClick={() => setExpanded(false)}>
                  <i className="bi bi-music-player-fill me-1"></i> Guitar Examples
                </Nav.Link>
                <Nav.Link as={Link} to="/booking" onClick={() => setExpanded(false)}>
                  <i className="bi bi-calendar-check me-1"></i> Booking
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
        <p className="mb-0">
          © {new Date().getFullYear()} Arthur Georgeson | Guitarist & Tutor
        </p>
      </footer>
    </div>
  );
}