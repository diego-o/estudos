'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    tags:[{
        type: String,
        require: true
    }],
    imagem: {
        type: String
    }
});

module.exports = mongoose.model('Produto', schema);