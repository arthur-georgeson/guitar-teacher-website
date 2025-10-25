require("dotenv").config(); // Load .env variables
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const { JWT } = require("google-auth-library");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// --- Google Calendar Setup ---
const calendarId = process.env.GOOGLE_CALENDAR_ID;
const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

const calendar = google.calendar({ version: "v3", auth });
const sheets = google.sheets({ version: "v4", auth });

// --- Google Sheet Setup ---
// Hardcoded Sheet ID (do NOT put in .env)
const sheetId = "1RV8Oem29PgUwC0NwkULMFfR3fowHJq-G2RwQiUu2Xb0"; // <-- replace with your actual Sheet ID
const sheetRange = "Sheet1!A:D"; // adjust if your sheet has a different name

// --- Fetch booked lessons from Calendar ---
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

    const booked = eventsRes.data.items.map((e) => ({
      start: new Date(e.start.dateTime || e.start.date).toISOString(),
      summary: e.summary,
      attendees: e.attendees || [],
    }));

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
    // Check if slot is booked
    const events = await calendar.events.list({
      calendarId,
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
    });

    if (events.data.items.length > 0) {
      return res.status(400).json({ error: "Time slot already booked" });
    }

    // Insert into Calendar
    await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: `Guitar Lesson with ${name}`,
        description: message,
        start: { dateTime: startDate.toISOString() },
        end: { dateTime: endDate.toISOString() },
        
      },
    });

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: sheetRange,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message, startDate.toISOString()]],
      },
    });

    res.json({ status: "success", message: "Booking confirmed!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// --- Serve React frontend ---
app.use(express.static(path.join(__dirname, "../build")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
