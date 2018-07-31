'use strict';

const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

exports.list = async () => {
    return await Cliente.find({}, 'nome cpf email endereco');
}

exports.findById = async (id) => {
    return await Cliente.findById(id, 'nome cpf email endereco');
}

exports.findByCpf = async (cpf) => {
    return await Cliente.findOne({ cpf: cpf }, 'nome cpf email endereco');
}

exports.create = async (data) => {
    var cliente = new Cliente(data);
    await cliente.save();
}