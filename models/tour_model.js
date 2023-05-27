const mongoose = require("mongoose");

const tour_schema = mongoose.Schema({
  // NAME TEXT NOT NULL UNIQUE
  name: {
    type: String, // tipo do arquivo
    unique: true, // não pode se repetir
    // required: true
    required: [true, "PRECISA DO NOME PARA CADASTRAR"], // precisa ser definido
  },
  price: {
    type: Number,
    required: [true, "PRECISA DE UM VALOR PARA CADASTRAR"],
  },
  rate: {
    type: Number,
    default: 0, // Define um valor inicial caso o campo não seja definido
  },
});

const Tour = mongoose.model("Tour", tour_schema);

module.exports = Tour;
