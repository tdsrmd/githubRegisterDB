const express = require("express");
const router = express.Router();
const Person = require("../models/person");

// get a list of persons from the database
router.get("/", function (req, res, next) {
  Person.find({})
    .then(function (persons) {
      res.send(persons);
    })
    .catch(next);
});

//get a person to class
router.get("/class/:class", function (req, res, next) {
  Person.find({ class: req.params.class }).then(function (person) {
    res.send(person);
  });
});

// add a new person to database
router.post("/", function (req, res, next) {
  Person.create(req.body)
    .then(function (person) {
      res.send(person);
    })
    .catch(next);
});

// update a person in the database
router.put("/:id", function (req, res, next) {
  Person.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (
    person
  ) {
    Person.findOne({ _id: req.params.id }).then(function (person) {
      res.send(person);
    });
  });
});

// delete a person in the database
router.delete("/:id", function (req, res, next) {
  Person.findOneAndDelete({ _id: req.params.id }).then(function (person) {
    res.send(person);
  });
});

module.exports = router;
