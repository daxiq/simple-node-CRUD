var express = require('express');
var router = express.Router();

let mongoose = require('./../config/connection');
let Friend = require('./../models/Friend');


//DEBUG="CRUD (Mongoose)":* & npm start

/* GET home page. */
router.get('/', function(req, res, next) {
  Friend.find((err, friends)=>{
  	// console.log(friends);
  	if (err) throw err;
  	res.render('index', {friends:friends});
  });
});

router.get('/friend/new', (req, res, next)=>{
	res.render('friendForm', {});
});

router.get('/friend/edit/:id', (req, res, next) =>{
	let idFriend = req.params.id;
	Friend.findOne({_id: idFriend}, (err, friend)=>{
		console.log(friend);
		if (err) throw err;
		res.render('friendForm', { friend: friend });
	});
});

router.get('/friend/delete/:id', (req, res, next) =>{
	let idFriend = req.params.id;

	Friend.remove({_id: idFriend}, (err)=>{
		if (err) throw err;
		res.redirect('/');
	});
});

module.exports = router;
