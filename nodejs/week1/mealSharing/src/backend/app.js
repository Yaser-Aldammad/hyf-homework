const express = require("express");
const app = express();

// import data here
const meals = require("./routes/meals");

app.get("/", async (request, response) => {
  response.send("<h1>Meal Sharing Web Application</h1>");
});

// meals with reviews
app.get("/meals", async (request, response) => {
  response.send(meals);
});

// Cheap-meal
const cheapMeals = require("./routes/cheapMeals");

app.get("/cheapMeals", async (request, response) => {
  response.send(cheapMeals);
});

// large-meal
const largeMeals = require("./routes/largeMeals");
app.get("/largeMeals", async (request, response) => {
  response.send(largeMeals);
});

//random meal
const meal = require("./routes/meal");
app.get("/meal", async (request, response) => {
  response.send(meal);
});

// reservations
const reservations = require("./routes/reservations");
app.get("/reservations", async (Request, response) => {
  response.send(reservations);
});

//random reservations
const reservation = require("./routes/randomRes");
app.get("/reservation", async (Request, response) => {
  response.send(reservation);
});

// Modularizing

module.exports = app;
