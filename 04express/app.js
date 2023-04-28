// importando express
var aplicacao = require('express');

// Criando variavel para ter acesso as funcionalidades
var app = aplicacao();

//rota
app.get('/', function(req, res){
    res.write('Utilizando o Express');
    res.end();

})

//Servidor
app.listen(8080);