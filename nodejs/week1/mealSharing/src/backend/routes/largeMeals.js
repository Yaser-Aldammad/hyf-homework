const meals = require("./meals");

const largeMeals = meals.filter((largeMeals) => {
  return largeMeals.maxNumberOfGuests < 7;
});

module.exports = largeMeals;
