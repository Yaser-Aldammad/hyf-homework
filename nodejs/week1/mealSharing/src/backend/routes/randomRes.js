const reservations = require("./reservations");

const randomreservation =
  reservations[Math.floor(Math.random() * reservations.length)];

module.exports = randomreservation;
