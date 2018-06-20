var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017/ams', (err, db) => {
		if(err){
			return console.log(err);
		}
		closure(db);
	});
}

let response = {
	status:200,
	message: null,
	data:[]
}

var sendError = (err, res) => {
	response.status = 501;
	response.message = typeof err == "object" ? err.message : err;
	res.status(501).json(response);
}

router.get('/courses', (req, res) => {
	connection((db) => {
		//var database = db.db('ams');
		db.db('ams').collection('courses').find().toArray().then((courses) => {
			response.data = courses;
			res.json(response);
		})
	})
})

module.exports = router;