const express = require("express");
const { response, request } = require("express");
const app = express();

app.get("/", (request, respose) => {
  respose.send("<h1>Worm-up exercise</h1>");
});
app.get("/number/add", async (request, response) => {
  let number_1 = request.query.first;
  let number_2 = request.query.second;

  let result = number_1 + number_2;
  response.send({ result });
});

app.get("/number/multiply", async (request, response) => {
  let number_1 = request.query.first;
  let number_2 = request.query.second;

  let result = number_1 * number_2;

  response.send({ result });
});
app.listen(3000);
console.log("server runing on port 3000");
