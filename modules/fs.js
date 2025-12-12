const { error } = require("console");
const fs = require("fs");
const path = require("path");

//criar pasta
fs.mkdir(path.join(__dirname, "/teste"), (err) => {
  if (err) {
    return console.log("Erro: " + err);
  }
  console.log("Pasta criada com sucesso!");
});

//criar arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node!",
  (err) => {
    if (err) {
      return console.log("Erro: " + err);
    }
    console.log("Arquivo criado com sucesso!");

    //adicionar ao arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      " hello world",
      (err) => {
        if (err) {
          return console.log("Erro: " + err);
        }
        console.log("Arquivo modificado!");
      }
    );

    //ler arquivo
    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: " + error);
        }
        console.log(data);
      }
    );
  }
);
