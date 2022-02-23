var express = require('express');
var router = express.Router();
var parent = require('path').resolve(__dirname, '..')

const multer = require('multer');

const imageStorage = multer.diskStorage({

    destination: parent+"/public/images/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "." + file.originalname)
        console.log(parent);
    }
});

const multerinstance = multer({storage: imageStorage});

router.post('/formData', multerinstance.single('image'), function (req, res) {
    var username = req.body.username;
    console.log(req.body);
    console.log("post received: %s ", username);

    res.end(JSON.stringify({
        status: true,

    }, null, 3));
});

module.exports = router;