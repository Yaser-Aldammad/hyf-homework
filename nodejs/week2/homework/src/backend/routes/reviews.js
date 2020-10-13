const express = require("express");
const reviews = require("../data/reviews.json");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(reviews);
  next();
});

router.get("/:id", (request, response) => {
  const id = Number(request.params.id);
  const revId = reviews.find((revId) => revId.id === id);
  if (revId) {
    response.json(revId);
  } else {
    response.status(404).send({ error: "unkown endpoint" });
  }
});
module.exports = router;
