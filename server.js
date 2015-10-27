// Dependencies
var express = require ('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection  = require('express-myconnection');


// Express configuration
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(

    connection(mysql,{
        host     : 'localhost',
        user     : 'root',
        password : '123456',
         port : 3306, //port mysql
        database : 'test',
        debug    : false //set true if you wanna see debug logger
    },'request')

);

//welcome
app.get('/', function(req,res) {
    res.redirect('./index.html');
    
});

app.use('/api/Deliverys', require('./app/DeliveryApi'));

var server = app.listen(8080 , function() {
    console.log('Server Running at http://localhost:8080');
    
    
});