// Dependencies
var express = require('express');
var router = express.Router();


var notFound = function (res) {
    res.status(404).send('Not Found!');
}

router.get('/', function(req,res) {
   
    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM entregas',function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }

            //res.render('id',{title:"RESTful Crud Example",data:rows});
	    res.json(rows);

         });req.params.id

    });
});

router.get('/:id', function (req,res){
   
    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");

        var query = conn.query('SELECT * FROM entregas where idEntrega = ?',[req.params.id],function(err,rows){

            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
	    res.json(rows);

         });

    });
});

module.exports = router;