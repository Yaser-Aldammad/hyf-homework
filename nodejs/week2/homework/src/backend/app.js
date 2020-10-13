const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Meal Sharing Web Application");
});

const meals = require("./routes/meals.js");
app.use("/meals", meals);

const reservations = require("./routes/reservations");
app.use("/reservations", reservations);

const reviews = require("./routes/reviews");
app.use("/reviews", reviews);

module.exports = app;
