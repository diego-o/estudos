'use strict';

const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');

exports.find = async () => {
    return await
        Pedido.find({}, 'numero cliente items')
            .populate('cliente', 'nome')
            .populate('items.produto', 'titulo');
}

exports.findById = async (id) => {
    return await
        Pedido.findById(id, 'numero cliente items')
            .populate('cliente', 'nome')
            .populate('items.produto', 'titulo');
}

exports.findByNumero = async (numero) => {
    return await
        Pedido.findOne({ numero: numero }, 'numero cliente items')
            .populate('cliente', 'nome')
            .populate('items.produto', 'titulo');
}

exports.findByCliente = async (idCliente) => {
    return await
        Pedido.findOne({ cliente: idCliente }, 'numero cliente items')
            .populate('cliente', 'nome')
            .populate('items.produto', 'titulo');
}

exports.create = async (pedido) => {
    var pedido = new Pedido(pedido);
    await pedido.save();
}
