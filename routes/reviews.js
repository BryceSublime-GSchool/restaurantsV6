var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
function Restaurants(){
  return knex('places')
}
function Reviews(){
  return knex('reviews')
}
/* GET users listing. */

router.get('/reviews/new', function(req,res,next){
res.render('reviews/new')

})

module.exports = router;
