const express = require('express');
const router = express.Router();

const Question = require('../models/Question');

//GET all categories
router.get('/', async (req, res) => {
  //pull this one out TODO
  const arrayShuffle = array => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  try {
    const questions = await Question.find({});
    let test = arrayShuffle([...Array(questions.length).keys()]);
    test = test.slice(0, 10);
    let test60Questions = test.map(questionIndex => questions[questionIndex]);
    res.json(test60Questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

module.exports = router;
