//Importando express
var express = require("express");

//App
var app = express();

// Especificar local do Css e da imagem
app.use(express.static(__dirname + '/publico'));

//rotas
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/pagina.html");
});

//servidor
app.listen(8080);
