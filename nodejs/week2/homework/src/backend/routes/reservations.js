const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/", (req, res, next) => {
  res.json(reservations);
  next();
});

router.get("/:id", (request, response, next) => {
  const id = Number(request.params.id);
  const reservId = reservations.find((reservId) => reservId.id === id);
  if (reservId) {
    response.json(reservId);
  } else {
    response.status(404).send({ error: "unkown endpoint" });
  }
});

module.exports = router;
