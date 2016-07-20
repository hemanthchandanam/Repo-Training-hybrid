
var express = require('express');
var router = express();
var calc = require('./calc');
var http = require('http');
var url = require("url");
var bodyParser = require('body-parser');
router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.get("/calc/add", function (req, res) {
var v1 = req.query.v1;
var v2 = req.query.v2;
var c = calc.add(v1, v2);
res.write(c.toString());
res.send();                       
  });

router.get("/calc/mult", function (req, res) {
var v1 = req.query.v1;
var v2 = req.query.v2;
var c = calc.mult(v1, v2);
res.write(c.toString());
res.send();                                                
  });

router.get("/calc/sub", function (req, res) {
var v1 = req.query.v1;
var v2 = req.query.v2;
var c = calc.sub(v1, v2);
res.write(c.toString());
res.send();                       
  });

router.get("/calc/div", function (req, res) {
var v1 = req.query.v1;
var v2 = req.query.v2;
var c = calc.div(v1, v2);
res.write(c.toString());
res.send();                       
  });

router.get("/calc/mod", function (req, res) {
var v1 = req.query.v1;
var v2 = req.query.v2;
var c = calc.mod(v1, v2);
res.write(c.toString());
res.send();                       
  });




router.listen(8080, function () {
  console.log(' listening for movies schema');
});