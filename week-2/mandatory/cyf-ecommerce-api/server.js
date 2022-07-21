//aux functions
const express = require('express');
const app = express();

const PORT = 3000

//functions



//middlewares
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/custumers", function (req, res) {
  res.send();
});

//server
app.listen(PORT, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
  });