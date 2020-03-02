const express = require('express');
const router = express.Router();

const Question = require('../models/Question');

//GET all questions
router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
  try {
    const questions = await Question.find({
      category: req.params.id
    });

    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

//POST add question
router.post('/', async (req, res) => {
  const { category, _id, question, answers, correctAnswer } = req.body;

  try {
    let questionAdd = await Question.findOne({
      category,
      _id,
      question,
      answers,
      correctAnswer
    });

    if (questionAdd) {
      return res
        .status(400)
        .json({ msg: 'Pitanje vec postoji u bazi podataka!' });
    }

    questionAdd = new Question({
      category,
      _id,
      question,
      answers,
      correctAnswer
    });

    const questionSave = await questionAdd.save();

    res.json(questionSave);
  } catch (err) {
    console.error(err.message);
    console.log('Server error!');
  }
});

module.exports = router;
