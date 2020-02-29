var express = require('express');
var router = express.Router();

let mongoose = require('./../config/connection');
let Friend = require('./../models/Friend');

/* GET home page. */
router.post('/friend/action', (req, res, next) => {
	// console.log(req.body);
	if (req.body._id === "") {
		let friend = new Friend({
			surname: req.body.surname,
			lastname: req.body.lastname,
			age: req.body.age,
		});
		console.log('Create');
		friend.save();
	} else {
		// console.log(req.body._id);
		Friend.findByIdAndUpdate(req.body._id, {$set: req.body}, {new: true}, (err, model)=>{
			if (err) throw err;
		});
	}
	res.redirect('/');
});

module.exports = router;
