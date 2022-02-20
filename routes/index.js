var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function (req, res, next) {
    var con = mysql.createConnection({
        host     : '52.66.168.190',
        port     :'3306',
        user     : 'root',
        password : '12345678',
        database : 'mysql'
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
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
