var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

          res.render('index',{title:"Caleb Hill"});


});
router.get('/jsonData',function(req,res){
 var mysql = require('mysql');

  var con = mysql.createConnection({
      host: "neil-dev.c6nail1iwzsm.us-east-1.rds.amazonaws.com",
      user: "dev",
      password: "j3fpT4xAnjTKLaQKEceK"
    });
    con.connect(function(err) {
    if (err) throw err;
     con.query("select * from demo.videos", function(err,results,fields){
     if (err) throw err;
     console.log(results);
     res.send(results);
     });
    });
});

router.get('/update/:id/:dir',function(req,res){
  var mysql = require('mysql');
  var params = req.params;
  var con = mysql.createConnection({
      host: "neil-dev.c6nail1iwzsm.us-east-1.rds.amazonaws.com",
      user: "dev",
      password: "j3fpT4xAnjTKLaQKEceK"
  });
  con.connect(function(err) {
  if (err) throw err;
     var sql = "update demo.videos set thumbs"+params.dir+" = thumbs"+params.dir+" +1 "+"where id ="+params.id;
     con.query(sql, function(err,results,fields){
     if (err) throw err;
     res.send(results);
     });
    });

});
router.get('/viewsUpdate/:id',function(req,res) {
    var mysql = require('mysql');
  var params = req.params;
  var con = mysql.createConnection({
      host: "neil-dev.c6nail1iwzsm.us-east-1.rds.amazonaws.com",
      user: "dev",
      password: "j3fpT4xAnjTKLaQKEceK"
  });
  con.connect(function(err) {
  if (err) throw err;
     var sql = "update demo.videos set views = views+1 where id ="+params.id;
     con.query(sql, function(err,results,fields){
     if (err) throw err;
     res.send(results);
     });
    });

});

module.exports = router;
