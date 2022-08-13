var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Some data - CONNECTED TO BACKEND');
});

router.get('/route')

module.exports = router;
