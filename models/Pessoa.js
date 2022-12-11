const mongoose = require('mongoose')

const cadastroPessoa = new mongoose.Schema ({
    nome: String,
    medicamentos: String,
    qtd_medicamentos: Number,
    telefone: Number,
    data_validade_med: String,
    email: String,
    senha: String

})

const Model = mongoose.model("pessoa", cadastroPessoa)

module.exports = Model