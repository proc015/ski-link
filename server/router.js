const router = require("express").Router();

const dashboardController = require('./controllers/dashboard');

const loginsController = require('./controllers/logins')

const clientController = require('./controllers/client')

router.post("/login", loginsController.postLogin);

router.post("/instructor", loginsController.postInstructorLogin);

router.get("/lessons/:userName", clientController.getClientLessons);

router.get("/lessons", dashboardController.getLessons);

router.post("/lessons", dashboardController.postLessons);

router.put("/lessons/:id/accept", dashboardController.acceptLessons);

router.put("/lessons/:id/reject", dashboardController.rejectLessons);

module.exports = router;
