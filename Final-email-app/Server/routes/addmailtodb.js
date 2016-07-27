var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var inboxsch = require(".././models/inboxschema");

//var requestify = require('requestify');

//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: false }));

router.post('/', function (req, res) {
console.log(req.body);
		var inbox = new inboxsch(req.body);

		   inbox.save(function(err){
		      res.send("data inserted");
		      console.log("console: data inserted");
			});
    //
		// router.get('/', function(req, res, next) {
		//   res.send("data inserted");
		// });
	});


module.exports = router;
