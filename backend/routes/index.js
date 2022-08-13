var express = require('express');
var router = express.Router();
var loginRouter = require('./login');
var signupRouter = require('./signup');
var postRouter = require('./post');
var studentsRouter = require('./students');
var submissionsRouter = require('./mysubmissions');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json('Some data - CONNECTED TO BACKEND');
});

router.use('/login',loginRouter);
router.use('/signup', signupRouter);
/*
router.use('/post', postRouter);
router.use('/students', studentsRouter);
router.use('/mysubmissions', submissionsRouter);
*/

module.exports = router;
