const Lesson = require('./model');

exports.getLessons = async (req, res) => {
    try {
    const lessons = await Lesson.find();
    res.status(201)
    res.json(lessons);
} catch (err) {
    console.log('err', err);
    res.sendStatus(404);
}
}

exports.postLessons = async (req, res) => {
    try {
        const newLesson = req.body;
        const createdLesson = await Lesson.create(newLesson);
        res.status(201);
        res.json(createdLesson);
    } catch (err) {
        console.log('err', err);
        res.sendStatus(404);
    }
};