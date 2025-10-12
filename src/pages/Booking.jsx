import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    <div>
      <h2>Book a Lesson / Contact Me</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message or preferences"
          onChange={handleChange}
        />

        <label>Select Date & Time:</label>
        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          showTimeSelect
          minDate={new Date()}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Pick a date and time"
          filterDate={(d) => d.getDay() !== 5} // Disable Fridays
          filterTime={(time) => {
  const day = time.getDay();
  const hour = time.getHours();

  // Weekdays Mon-Thu: 6pm–9pm
  if (day >= 1 && day <= 4) {
    if (hour < 18 || hour >= 21) return false;
  }

  // Weekends Sat-Sun: 9am–3pm
  if (day === 0 || day === 6) {
    if (hour < 9 || hour >= 15) return false;
  }

  // Grey out overlapping booked slots (lesson 1hr + 30min buffer)
  return !bookedSlots.some((b) => {
    const lessonStart = b.getTime();
    const lessonEnd = lessonStart + 60 * 60 * 1000; // 1 hour lesson
    const bufferStart = lessonStart - 30 * 60 * 1000; // 30 min before
    const bufferEnd = lessonEnd + 30 * 60 * 1000; // 30 min after

    const slotTime = time.getTime();

    return slotTime >= bufferStart && slotTime < bufferEnd;
  });
}}

          timeIntervals={30}
        />

        <button type="submit">Send Booking</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
