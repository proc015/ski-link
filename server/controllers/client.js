const { Lesson } = require("../models/model");


const hardcodeUserName = "john";

exports.getClientLessons = async (req, res) => {
  try {
    const userName = req.params.userName;
    const lessons = await Lesson.find({ name: userName });
    if (userName === hardcodeUserName) {
      res.json(lessons);
    } else {
      res.json([]);
    }
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};