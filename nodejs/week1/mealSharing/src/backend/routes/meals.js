const express = require("express");
const app = express();

const mealsData = require("../data/meals.json");

app.get("/", async (request, response) => {
  response.send(mealsData);
});

const review = require("../data/reviews.json");
let mealsWithReviews = [];
let mealsWithoutRewview = [];

const allMeals = () => {
  for (let i = 0; i < mealsData.length; i++) {
    for (let m = 0; m < review.length; m++) {
      if (mealsData[i].id === review[m].mealId) {
        mealsWithReviews.push(review[m]);
        mealsData[i].reviews = mealsWithReviews;
      } else {
        mealsData[i].reviews = mealsWithoutRewview;
      }
    }
  }
};
allMeals();

module.exports = mealsData;
