import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Booking.css'

export default function Booking() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [date, setDate] = useState(null);
  const [status, setStatus] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);

  // Fetch booked lessons for next 30 days
  useEffect(() => {
    const start = new Date();
    const end = new Date();
    end.setDate(end.getDate() + 30);

    fetch(
      `http://localhost:4000/api/booked?start=${start.toISOString()}&end=${end.toISOString()}`
    )
      .then((res) => res.json())
      .then((data) => setBookedSlots(data.map((d) => new Date(d))))
      .catch(console.error);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!date) {
      setStatus("Please select a date and time.");
      return;
    }

    const bookingData = { ...form, date: date.toISOString() };

    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:4000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (res.ok) setStatus("Booking confirmed!");
      else setStatus(data.error || "Something went wrong.");
    } catch {
      setStatus("Failed to send.");
    }
  }

  return (
    <div className="booking-page">
      <div className="container">
        <div className="text-center booking-header mb-5">
          <h1 className="display-4 fw-bold mb-3">Book Your Lesson</h1>
          <p className="lead">Fill out the form below and I'll get back to you within 24 hours to schedule your first lesson.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card shadow booking-card">
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-person-fill me-2 icon-dark"></i>
                      Your Name
                    </label>
                    <input
                      name="name"
                      className="form-control form-control-lg form-control-custom"
                      placeholder="Enter your full name"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-envelope-fill me-2 icon-dark"></i>
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-lg form-control-custom"
                      placeholder="your.email@example.com"
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-chat-text-fill me-2 icon-dark"></i>
                      Message or Preferences
                    </label>
                    <textarea
                      name="message"
                      className="form-control form-control-lg form-control-custom"
                      placeholder="Tell me about your goals and preferences..."
                      onChange={handleChange}
                      rows="4"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <i className="bi bi-calendar-check-fill me-2 icon-dark"></i>
                      Select Date & Time
                    </label>
                    <DatePicker
                      selected={date}
                      onChange={(d) => setDate(d)}
                      showTimeSelect
                      minDate={new Date()}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      placeholderText="Pick a date and time"
                      filterDate={(d) => d.getDay() !== 5}
                      filterTime={(time) => {
                        const day = time.getDay();
                        const hour = time.getHours();

                        if (day >= 1 && day <= 4) {
                          if (hour < 18 || hour >= 21) return false;
                        }

                        if (day === 0 || day === 6) {
                          if (hour < 9 || hour >= 15) return false;
                        }

                        return !bookedSlots.some((b) => {
                          const lessonStart = b.getTime();
                          const lessonEnd = lessonStart + 60 * 60 * 1000;
                          const bufferStart = lessonStart - 30 * 60 * 1000;
                          const bufferEnd = lessonEnd + 30 * 60 * 1000;
                          const slotTime = time.getTime();
                          return slotTime >= bufferStart && slotTime < bufferEnd;
                        });
                      }}
                      timeIntervals={30}
                      className="form-control form-control-lg form-control-custom"
                      wrapperClassName="w-100"
                    />
                  </div>

                  <button type="submit" className="btn btn-lg w-100 text-white fw-semibold booking-btn">
                    <i className="bi bi-send-fill me-2"></i>
                    Send Booking Request
                  </button>
                </form>
                
                {status && (
                  <div className={`alert ${status.includes('confirmed') ? 'alert-success' : status.includes('Failed') ? 'alert-danger' : 'alert-info'} mt-4 mb-0 status-alert`}>
                    <i className={`bi ${status.includes('confirmed') ? 'bi-check-circle-fill' : status.includes('Failed') ? 'bi-x-circle-fill' : 'bi-info-circle-fill'} me-2`}></i>
                    {status}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card shadow border-0 h-100 contact-card">
              <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-center">
                <h3 className="mb-4 fw-bold">
                  <i className="bi bi-question-circle-fill me-2"></i>
                  Have Questions?
                </h3>
                <p className="mb-4">
                  Feel free to include any questions in the message field, or reach out directly:
                </p>
                
                <div className="d-flex align-items-start mb-3 flex-wrap">
                  <i className="bi bi-envelope-fill fs-4 me-3 mt-1"></i>
                  <div>
                    <small className="d-block mb-1" style={{opacity: 0.8}}>Email</small>
                    <a href="mailto:lessons@example.com" className="text-white text-decoration-none fw-semibold">
                      arthgeorgeson@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-telephone-fill fs-4 me-3 mt-1"></i>
                  <div>
                    <small className="d-block mb-1" style={{opacity: 0.8}}>Phone</small>
                    <a href="tel:5551234567" className="text-white text-decoration-none fw-semibold">
                      07952 276343
                    </a>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-top" style={{borderColor: 'rgba(255,255,255,0.2)'}}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-clock-fill fs-5 me-3"></i>
                    <div>
                      <small className="d-block fw-semibold mb-1">Weekdays</small>
                      <small style={{opacity: 0.9}}>Mon-Thu: 6pm - 9pm</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-calendar2-week-fill fs-5 me-3"></i>
                    <div>
                      <small className="d-block fw-semibold mb-1">Weekends</small>
                      <small style={{opacity: 0.9}}>Sat-Sun: 9am - 3pm</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}