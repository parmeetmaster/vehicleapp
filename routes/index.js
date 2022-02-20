var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {
        title: 'Express',
    });
});

router.post('/formData', function (req, res) {
    var username = req.body.username;
    console.log(req.body);
    console.log("post received: %s ", username);
});


module.exports = router;
