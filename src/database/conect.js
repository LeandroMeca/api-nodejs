const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(
    //`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.byhnx3k.mongodb.net/database?retryWrites=true&w=majority`,
    "mongodb://localhost:27017/",
    (error) => {
      if (error) {
        console.log("Erro ao conectar ao banco de dados:", error);
      }
      return console.log("Conectado ao banco de dados com sucesso!");
    }
  );
};

module.exports = connectToDB;
