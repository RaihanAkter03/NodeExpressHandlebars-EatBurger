var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/insertOne", function (req, res) { 
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/")
    });
});

router.put("/updateOne/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne(
        {
            devoured: req.body.devoured
        }, condition, function () {                      
        res.redirect("/");
    });
});

module.exports = router;