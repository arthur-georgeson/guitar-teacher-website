import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Booking.css';
import { InlineWidget } from 'react-calendly';

export default function Booking() {
  return (
    <div className="booking-page">
      <div className="container">
        <div className="text-center booking-header mb-5">
          <h1 className="display-4 fw-bold mb-3">Book Your Lesson</h1>
          <p className="lead">
            Choose a time that works for you below and book your lesson instantly:
          </p>
        </div>

        <div className="row g-4">
          {/* Booking Calendar */}
          <div className="col-lg-7">
            <div className="card shadow booking-card">
              <div className="card-body p-4 p-md-5">
                <InlineWidget url="https://calendly.com/arthgeorgeson" />
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="col-lg-5">
            <div className="card shadow border-0 h-100 contact-card">
              <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-center">
                <h4 className="mb-4 fw-bold">
                  <i className="bi bi-question-circle-fill me-2"></i>
                  Have Questions?
                </h4>
                <p className="mb-4">
                  Feel free to include any questions in the message field on the booking page, or reach out directly:
                </p>

                <div className="d-flex align-items-start mb-3 flex-wrap">
                  <i className="bi bi-envelope-fill fs-4 me-3 mt-1"></i>
                  <div>
                    <small className="d-block mb-1" style={{opacity: 0.8}}>Email</small>
                    <a href="mailto:arthgeorgeson@gmail.com" className="text-white text-decoration-none fw-semibold">
                      arthgeorgeson@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-telephone-fill fs-4 me-3 mt-1"></i>
                  <div>
                    <small className="d-block mb-1" style={{opacity: 0.8}}>Phone</small>
                    <a href="tel:07952276343" className="text-white text-decoration-none fw-semibold">
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