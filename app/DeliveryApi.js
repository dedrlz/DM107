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

router.post('/', function(req,res) {

    //get data
    var data = {
        idEntrega:req.body.idEntrega,
        idPedido:req.body.idPedido,
        idCliente:req.body.idCliente,
        nomeRecebedor:req.body.nomeRecebedor,
        cpfRecebedor:req.body.cpfRecebedor,
        recebedorcomprador:req.body.recebedorcomprador,
        datahoraEntrega:req.body.datahoraEntrega,
        localizacao:req.body.localizacao
     };

    //inserting into mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("INSERT INTO entregas set ? ",data, function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });

     });
});

router.put('/:id', function(req,res) {
    var idEntrega = req.params.id;

    //get data
    var data = {
        idEntrega:req.body.idEntrega,
        idPedido:req.body.idPedido,
        idCliente:req.body.idCliente,
        nomeRecebedor:req.body.nomeRecebedor,
        cpfRecebedor:req.body.cpfRecebedor,
        recebedorcomprador:req.body.recebedorcomprador,
        datahoraEntrega:req.body.datahoraEntrega,
        localizacao:req.body.localizacao
     };

    //inserting into mysql
    req.getConnection(function (err, conn){

        if (err) return next("Cannot Connect");

        var query = conn.query("UPDATE entregas set ? WHERE idEntrega = ? ",[data,idEntrega], function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);aa

        });

     });

});
   
router.delete('/:id', function(req,res){

    var idEntrega = req.params.id;

     req.getConnection(function (err, conn) {

        if (err) return next("Cannot Connect");

        var query = conn.query("DELETE FROM entregas  WHERE idEntrega = ? ",[idEntrega], function(err, rows){

             if(err){
                console.log(err);
                return next("Mysql error, check your query");
             }

             res.sendStatus(200);

        });
     });
});


module.exports = router;