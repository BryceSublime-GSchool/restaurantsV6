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
  console.log('$$$$$$$$$$$');
router.get('/restaurants/#{id}/reviews/new', function(req,res,next){
  console.log('$$$$$$$$$$$2');
res.redirect('/reviews/new')

})

module.exports = router;
