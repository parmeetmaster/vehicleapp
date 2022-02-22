var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var mysqlutils = require('./utils/mysql_utils.js');
const Convert = require("./utils/address_master");
const multer = require('multer');
/* GET home page. */
router.get('/', async function (req, res, next) {
    var sj = await new mysqlutils();
    var data = await sj.getCategories();

    var map = {"data":data}

    console.log();
    const addressMaster = Convert.toAddressMaster(JSON.stringify(map));

    addressMaster.data.forEach((e,i)=>{

    });

    res.render('index', {
        title: JSON.stringify(map),
    });

});

const imageStorage = multer.diskStorage({

    destination: 'images',
    filename: (req, file, cb) => {
        cb(null, Date.now()+"."+file.originalname)
    }
});

const multerinstance=multer({storage:imageStorage});



module.exports = router;
