const meals = require("./meals");

const randoMeal = meals[Math.floor(Math.random() * meals.length)];

module.exports = randoMeal;
