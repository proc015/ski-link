
const router = require('express').Router(); 
const controller = require('./controller');


router.get('/lessons', controller.getLessons)

router.post('/lessons', controller.postLessons)

router.put('/lessons/:id/accept', controller.acceptLessons)

router.put('/lessons/:id/reject', controller.rejectLessons)

module.exports = router; 