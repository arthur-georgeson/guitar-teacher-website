import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:4000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("Message sent!");
      else setStatus("Something went wrong.");
    } catch {
      setStatus("Failed to send.");
    }
  }

  return (
    <div>
      <h2>Book a Lesson / Contact Me</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Message or preferred lesson time" onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
