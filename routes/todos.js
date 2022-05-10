var express = require('express');
var router = express.Router();

const Todo = require('../models/Todo')

router.post('/add/todo', function(req,res, next){
   res.render('something')
})

module.exports = router;
