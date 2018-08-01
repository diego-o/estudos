'use strict';

const pedidoDao = require('../dao/pedido-dao');
const guid = require('guid');

exports.get = async (req, res, next) => {
    try {
        var pedidos = await pedidoDao.find();
        res.status(200).send(pedidos);
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.getById = async (req, res, next) => {
    try {
        var pedido = await pedidoDao.findById(req.params.id);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.getByNumero = async (req, res, next) => {
    try {
        var pedido = await pedidoDao.findByNumero(req.params.numero);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.getByCliente = async (req, res, next) => {
    try {
        var pedido = await pedidoDao.findByCliente(req.params.cliente);
        res.status(200).send(pedido);
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        let pedido = {
            cliente: req.body.cliente,
            numero: guid.raw().substring(0, 6),
            items: req.body.items
        };

        await pedidoDao.create(pedido);
        res.status(201).send({ Message: 'Pedido cadastrado com sucesso.' });
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}
