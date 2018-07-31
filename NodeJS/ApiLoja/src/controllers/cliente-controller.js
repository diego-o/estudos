'use strict';

const clienteDao = require('../dao/cliente-dao');
const md5 = require('md5');

exports.get = async (req, res, next) => {
    try {
        var clientes = await clienteDao.list();
        res.status(200).send(clientes);
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await clienteDao.create(req.body);
        res.status(201).send({ Message: 'Cliente cadastrado com sucesso.' });
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}