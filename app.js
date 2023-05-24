const express = require("express");
const app = express();
const session = require("express-session");
const getLatestNBAScore = require("./helper-functions/db_functions");
const updateMLBData = require("./helper-functions/MLBhelpers");

app.use(
  session({
    secret: "temp-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.post("/NBA/new/", (req, res) => {
  res.send({ status: 200 });
});

app.get("/NBA/update", async (req, res) => {
  try {
    const nbadata = await getLatestNBAScore();
    res.status(200).json({ data: nbadata });
  } catch (err) {
    res.status(500);
  }
});

app.get("/MLB/update", async (req, res) => {
  try {
    const mlbdata = await updateMLBData();
    res.status(200).json({ data: mlbdata });
  } catch (err) {
    res.status(500);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
