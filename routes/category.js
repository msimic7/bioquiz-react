const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

//GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({}, { name: 1, _id: 1 });
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

//POST add category
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    let categoryAdd = await Category.findOne({
      name
    });

    if (categoryAdd) {
      return res
        .status(400)
        .json({ msg: 'Kategorija vec postoji u bazi podataka!' });
    }

    categoryAdd = new Category({
      name
    });

    const categorySave = await categoryAdd.save();

    res.json(categorySave);
  } catch (err) {
    console.error(err.message);
    console.log('Server error!');
  }
});

module.exports = router;
