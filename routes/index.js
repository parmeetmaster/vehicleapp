var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlutils = require('./utils/mysql_utils.js');
const Convert = require("./utils/address_master");
/* GET home page. */
router.get('/', async function (req, res, next) {
    var sj = await new mysqlutils();
    var data = await sj.getCategories();

    var map = {"data":data}

    console.log();
    const addressMaster = Convert.toAddressMaster(JSON.stringify(map));

    addressMaster.data.forEach((e,i)=>{
        console.log(e.);
    });

    res.render('index', {
        title: JSON.stringify(map),
    });

});

router.post('/formData', function (req, res) {
    var username = req.body.username;
    console.log(req.body);
    console.log("post received: %s ", username);
});


module.exports = router;
