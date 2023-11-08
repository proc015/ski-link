
const router = require('express').Router(); 
const controller = require('./controller');


router.get('/lessons', controller.getLessons)

router.post('/lessons', controller.postLessons)

module.exports = router; 