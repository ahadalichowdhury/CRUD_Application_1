const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.send(err);
  }
});
router.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const p1 = await person.save();
    res.json(p1);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    person.age = req.body.age;
    const p1 = await person.save();
    res.json(p1);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    res.json("deleted");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
