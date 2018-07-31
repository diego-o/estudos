'use strict';

const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

exports.list = async () => {
    var clientes = await Cliente.find({}, 'nome cpf email endereco');
    return clientes;
}

exports.create = async (data) => {
    var cliente = new Cliente(data);
    await cliente.save();
}