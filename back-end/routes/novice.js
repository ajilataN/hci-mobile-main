const express = require("express");
const novice = express.Router();
const Novica = require("../models/Novica");

//Gets all the news in the DB
novice.get("/", async (req, res, next) => {
  try {
    let queryResult = await Novica.find();
    res.json(queryResult);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

//Gets one new based on the id
novice.get("/:id", async (req, res, next) => {
  try {
    let queryResult = await Novica.findOne({ _id: req.params.id });
    res.json(queryResult);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

//Inserts one new to the database
novice.post("/", async (req, res, next) => {
  let { text, tag, location, hashtag } = req.body;
  console.log(req.body);
  var isAcompleteNovica = text && tag && location && hashtag;
  if (isAcompleteNovica) {
    try {
      let queryResult = await Novica.create({ text, tag, location, hashtag });
      res.json(queryResult);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  } else {
    console.log("A field is empty!!");
  }
  res.end();
});

// Deletes the selected new
novice.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params);
    await Novica.deleteOne({ _id: req.params.id });
    //TODO: handle success
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = novice;
