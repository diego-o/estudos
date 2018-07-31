'use strict';

const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.find = async () => {
    return await Produto.find({}, 'codigo titulo descricao valor tags');
}

exports.findById = async (id) => {
    return await Produto.findById(id, 'codigo titulo descricao valor tags');
}

exports.findByCodigo = async (codigo) => {
    return await Produto.findOne({ codigo: codigo }, 'codigo titulo descricao valor tags');
}

exports.findByTag = async (tag) => {
    return await Produto.find({ tags: tag }, 'codigo titulo descricao valor tags');
}

exports.create = async (data) => {
    var produto = new Produto(data);
    await produto.save();
}

exports.update = async (id, data) => {
    await Produto.findByIdAndUpdate(id, {
        $set: {
            titulo: data.titulo,
            descricao: data.descricao,
            valor: data.valor
        }
    });
}