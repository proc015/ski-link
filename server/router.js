
const router = require('express').Router(); 
const controller = require('./controller');


router.post('/login', controller.postLogin)

router.post('/instructor', controller.postInstructorLogin)

router.get('/lessons', controller.getLessons)

router.get('/lessons/:userName', controller.getClientLessons)

router.post('/lessons', controller.postLessons)

router.put('/lessons/:id/accept', controller.acceptLessons)

router.put('/lessons/:id/reject', controller.rejectLessons)



module.exports = router; 