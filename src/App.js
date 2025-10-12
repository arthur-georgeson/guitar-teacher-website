import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Examples from "./pages/Examples";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1>🎸 Guitar Lessons with Arthur</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/examples">Guitar Examples</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Arthur’s Guitar Lessons</p>
      </footer>
    </div>
  );
}
