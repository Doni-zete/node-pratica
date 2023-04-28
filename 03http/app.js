// Importando o modulo http

var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Praticando Node.js");
    res.end();
  })
  .listen(8080);
