const meals = require("./meals");

const cheapMeals = meals.filter((cheapMeals) => {
  return cheapMeals.price <= 70;
});
module.exports = cheapMeals;
