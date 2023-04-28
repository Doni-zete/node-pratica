// Express

var express = require('express');
//BordParser
var bodyParser = require('body-parser');

//App
var app = express();

//Configurar o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req, res){
    res.write('O nome informado ' + req.body.nome);
    res.end();
});

//servidor

app.listen(8080);
