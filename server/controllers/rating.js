const { Rating } = require('../models/model')


exports.postRatings = async (req, res) => {
  try {
    const newRating = req.body;
    const createdRating = await Rating.create(newRating);
    res.status(201);
    res.json(createdRating);
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};

exports.getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(201);
    res.json(ratings);
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};