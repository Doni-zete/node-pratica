//importando o express e o express-handlebars
var express = require("express");
var exphbs = require("express-handlebars");

//App
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "minhaPagina" }));
app.set("view engine", "handlebars");

// Especificar local do Css e da imagem
app.use(express.static(__dirname + '/publico'));


//rotas
app.get("/", function (req, res) {
  res.render("inicio");
});

app.get("/sobre", function (req, res) {
  res.render("sobre");
});

// servidor
app.listen(3000);
