const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// set up our express app
const app = express();
app.use(cors());
// connect to mongodb
mongoose.connect(
  "mongodb+srv://sedat:<password>@cluster0.tdb0a.mongodb.net/PERSONS?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
mongoose.Promise = global.Promise;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Server Çalışıyor</h1>`);
});

// initialize routes
app.use("/api/persons", require("./routes/api"));

// error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server çalıştı PORT: ${PORT}`);
});
