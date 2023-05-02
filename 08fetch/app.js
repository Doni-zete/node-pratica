//Importando os modulos 
var express = require('express');
var fetch = require('node-fetch');

//App
var app = express();

//Rota
app.get('/', function(req, res){
    // acessa esse link
    fetch('https://jsonplaceholder.typicode.com/users')
    // depois transforma para um json
    .then(resposta => resposta.json())
    // imprime no console em formato tabela;
    .then(resposta => console.table(resposta))
    
    //para não deixar o navegador em loop
    res.end();
});

//Servidor
app.listen(8080);
