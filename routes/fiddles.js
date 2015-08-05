var express = require('express');
var router = express.Router();
// var db = require('monk')(process.env.MONGOLAB_URI);
var db = require('monk')('localhost/fiddles')
var Fiddles = db.get('fiddles');
require('dotenv').load()

router.get('/', function(req, res) {
  Fiddles.find({}, function(err, fiddles) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(fiddles);
  })
});

module.exports = router;
