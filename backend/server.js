require("dotenv").config(); // Load .env variables
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const { JWT } = require("google-auth-library");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// --- Calendar ID from env ---
const calendarId = process.env.GOOGLE_CALENDAR_ID;

// --- JWT auth using env variables ---
const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), // Fix line breaks
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

// --- Fetch booked lessons ---
app.get("/api/booked", async (req, res) => {
  try {
    const start = new Date(req.query.start || new Date());
    const end = new Date(req.query.end || new Date());
    end.setDate(end.getDate() + 30);

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
    const events = await calendar.events.list({
      calendarId,
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
    });

    if (events.data.items.length > 0) {
      return res.status(400).json({ error: "Time slot already booked" });
    }

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

const path = require("path");

// Serve React build files
app.use(express.static(path.join(__dirname, "../build")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

