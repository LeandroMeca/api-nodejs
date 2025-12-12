const path = require("path");
//nome do arquivo
console.log(path.basename(__filename));
//nomde do diretorio
console.log(path.dirname(__filename));
//extensao do arquivo
console.log(path.extname(__filename));
//objeto com informacoes
console.log(path.parse(__filename));
//juntar caminhos
console.log(path.join(__dirname, "novo", "novo.html"));
