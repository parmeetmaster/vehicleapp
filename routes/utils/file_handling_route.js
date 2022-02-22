router.post('/formData',multerinstance.single('image'), function (req, res) {
    var username = req.body.username;
    console.log(req.body);
    console.log("post received: %s ", username);




    res.end(JSON.stringify({ a: 1 }, null, 3));
});
