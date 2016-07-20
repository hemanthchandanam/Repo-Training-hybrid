var mongoose = require('mongoose');
var express = require('express');
//var MovieObj = require('./MongooseExp-1');
var router = express();
var http = require('http');
var bodyParser = require('body-parser');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  desc: String,
  location: String
});

var Movie = mongoose.model('Movie', userSchema);

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

mongoose.connect('mongodb://localhost/myappdatabase', function (error) {
  if (error) {
    console.log(error);
  }
});


router.post("/movies/add", function (req, res) {


  var movieObj = new Movie({
    name: req.body.name,
    desc: req.body.desc,
    location: req.body.location
  });
  
  console.log(movieObj);
  movieObj.save(function (err, movieObj) {
    if (err) return console.error(err);
    console.dir(movieObj);
  });
  res.send(movieObj);
});




router.get("/movies/movie", function (req, res) {
  var n = req.query.name;
  console.log("name::::", n);
  Movie.find({ name: n }, function (err, obj) {
    if (err) throw err;
    console.log("movies/move ::::" + obj);
    res.send(obj);
  });
});


router.get("/movies/", function (req, res) {
  Movie.find({}, function (err, doc) {
    if (err) throw err;
    console.log("movies/ ::::" + doc);
    res.send(doc);
  });
});



router.get('/', function (req, res) {
  res.send('Hello movies World!');
});

router.listen(8080, function () {
  console.log(' listening for movies schema');
});