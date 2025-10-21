// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const { JWT } = require("google-auth-library");
const serviceAccount = require("./service-account.json"); // your key

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const calendarId = "arthgeorgeson@gmail.com"; // your calendar

// JWT auth
const auth = new JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

// --- Fetch booked lessons ---
app.get("/api/booked", async (req, res) => {
  try {
    const start = new Date(req.query.start || new Date());
    const end = new Date(req.query.end || new Date());
    end.setDate(end.getDate() + 30); // 30-day range

    const eventsRes = await calendar.events.list({
      calendarId,
      timeMin: start.toISOString(),
      timeMax: end.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });

    const booked = eventsRes.data.items.map((e) =>
      new Date(e.start.dateTime || e.start.date).toISOString()
    );

    res.json(booked);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch booked events" });
  }
});

// --- Book a lesson ---
app.post("/api/book", async (req, res) => {
  const { name, email, message, date } = req.body;
  const startDate = new Date(date);
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour

  try {
    // Check conflicts
    const events = await calendar.events.list({
      calendarId,
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
    });

    if (events.data.items.length > 0) {
      return res.status(400).json({ error: "Time slot already booked" });
    }

    // Insert event
    await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: `Guitar Lesson with ${name}`,
        description: message,
        start: { dateTime: startDate.toISOString() },
        end: { dateTime: endDate.toISOString() },
      },
    });

    res.json({ status: "success", message: "Booking confirmed!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
