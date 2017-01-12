var express = require('express');
var router = express.Router();

var product = require('../models/product.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/*router.get('/:id',function(req, res, next){
    product.findById(req.params.id, function (err, product_detail){
     if (err) return next(err);
    res.json(product_detail);
    });
});*/


/*
router.get('/:id', function(req, res, next) {
  product.findById(req.params.id, function(err, product_detail) {
    if(err) throw err;
    res.render('product', {data : product_detail});
      console.log(data);
  });
}); */
 
router.get('/:id', function(req, res, next) {
  product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
  
    res.json(post);
      
  });
    
router.post('/', function(req, res, next) {
    debugger;
    var reqq = req;
  product.insertMany(req.body, function (err, post) {
    if (err) return next(err);
  
    res.json(post);
      
  });
}); 


module.exports = router;