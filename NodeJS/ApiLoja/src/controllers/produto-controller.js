'use strict';

const produtoDao = require('../dao/produto-dao');

exports.get = async (req, res, next) => {
    try {
        var data = await produtoDao.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao consultar produtos.',
            data: error
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        var data = await produtoDao.findById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao consultar produtos.',
            data: error
        });
    }
};

exports.getByCodigo = async (req, res, next) => {
    try {
        var data = await produtoDao.findByCodigo(req.params.codigo);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao consultar produtos.',
            data: error
        });
    }
};

exports.getByTag = async (req, res, next) => {
    try {
        var data = await produtoDao.findByTag(req.params.tag);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            Message: 'Erro ao consultar produtos.',
            data: error
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        await produtoDao.create(req.body);
        res.status(201).send({ Message: 'Produto cadastrado com sucesso.' });
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await produtoDao.update(req.params.id, req.body);
        res.status(200).send({ Message: 'Produto atualizado com sucesso.' });
    } catch (error) {
        res.status(500).send({
            Message: 'Ocorreu um erro.',
            Data: error
        });
    }
}