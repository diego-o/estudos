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

exports.getById = async (req, res, next) => {
    try {
        var cliente = await clienteDao.findById(req.params.id);
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.getByCpf = async (req, res, next) => {
    try {
        var cliente = await clienteDao.findByCpf(req.params.cpf);
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        req.body.senha = md5(req.body.senha);        
        await clienteDao.create(req.body);
        
        res.status(201).send({ Message: 'Cliente cadastrado com sucesso.' });
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}

exports.put = async (req, res, next) => {
    try {
        await clienteDao.update(req.params.id, req.body);
        res.status(200).send({ Message: 'Cliente atualizado com sucesso.' });
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}