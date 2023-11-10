const { Lesson } = require("./model");

exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(201);
    res.json(lessons);
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};

exports.postLessons = async (req, res) => {
  try {
    const newLesson = req.body;
    const createdLesson = await Lesson.create(newLesson);
    res.status(201);
    res.json(createdLesson);
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};

exports.acceptLessons = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    lesson.status = "ACCEPTED";
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Server Error");
  }
};

exports.rejectLessons = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    lesson.status = "REJECTED";
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Server Error");
  }
};

const hardcodedUser = {
    email: 'john@gmail.com',
    password: 'password123', // Change before going live 
  };

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    // Need to access user and password in DB in live app
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      res.json({ message: 'Logged in successfully' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
};

