const { Lesson } = require("../models/model");


const hardcodeUserName = "john";

exports.getClientLessons = async (req, res) => {
  try {
    const email = req.params.email;
    const lessons = await Lesson.find({ email: email });
    if (email) {
      res.json(lessons);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};