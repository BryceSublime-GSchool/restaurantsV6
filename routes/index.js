var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
function Restaurants(){
  return knex('places')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/restaurants/index');
});

module.exports = router;
