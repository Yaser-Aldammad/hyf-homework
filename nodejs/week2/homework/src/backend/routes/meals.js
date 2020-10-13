const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

router.get("/:id", (request, response) => {
  const id = Number(request.params.id);
  const mealId = meals.find((mealId) => mealId.id === id);
  if (mealId) {
    response.json(mealId);
  } else {
    response.status(404).send({ error: "unkown endpoint" });
  }
});

// Maher
router.get("/", async (req, res) => {
  let maxPrice = req.query.maxPrice;
  if (maxPrice) {
    res.send(meals.filter((meal) => meal.price <= Number(maxPrice)));
  }

  // filter by title
  let title = req.query.title;
  if (title) {
    let titlestring = meals.some((meals) => meals.title.includes(title));
    if (titlestring) {
      res.send(
        meals.filter((meal) => {
          return meal.title.includes(title);
        })
      );
    } else {
      res.status(400).send(`no meal founded with title ${title}`);
    }
  }

  // filter by created date

  let createdAfter = Date.parse(meal.createdAt);
  if (createdAfter) {
    res.send(meals.filter((meal) => meal.createdAt >= createdAfter));
  }
  let limit = req.query.limit;
  if (limit) {
    let limitedmeals = [];
    for (let i = 0; i < parseInt(limit); i++) {
      limitedmeals.push(meals[i]);
    }
    res.send(limitedmeals);
  }

  res.json(meals);
});

module.exports = router;
