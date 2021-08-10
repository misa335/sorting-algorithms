const express = require("express");
const path = require("path");

// We are initializing express here
const app = express();

// Create a port
const port = process.env.PORT || 4000;

// Have it serve up the index.html file
app.use(express.static(path.join(__dirname)));

// The PORT that our server sits on
app.listen(port, function () {
  console.log("Sorting app listening on " + port + "!");
});
