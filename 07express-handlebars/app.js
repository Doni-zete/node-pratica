//importando o express e o express-handlebars
var express = require("express");
var exphbs = require("express-handlebars");

//App
var app = express();

//Template
app.engine("handlebars", exphbs({ defaultLayout: "minhaPagina" }));
app.set("view engine", "handlebars");

// Especificar local do Css e da imagem
app.use(express.static(__dirname + '/publico'));


//Rotas
app.get("/", function (req, res) {
let pessoas =[
  
  {"nome": "Yondaime", "idade":27},
  {"nome": "Naruto", "idade": 15},
  {"nome": "Jiraya","idade":54}
]

  res.render("inicio", {gostandoDeNode:false, dados:pessoas});
});

app.get("/sobre", function (req, res) {
  res.render("sobre");
});

// Servidor
app.listen(3000);
