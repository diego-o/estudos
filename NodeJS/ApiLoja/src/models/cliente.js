'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    endereco: {
        cep: {
            type: String,
            require: true
        },
        logradouro: {
            type: String,
            require: true
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
            required: false
        }
    }
});

module.exports = mongoose.model('Cliente', schema);