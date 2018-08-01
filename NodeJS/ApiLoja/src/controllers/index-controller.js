'use strict';

const clienteDao = require('../dao/cliente-dao');
const authService = require('../services/auth-service');
const md5 = require('md5');

exports.get = (req, res, next) => {
    res.status(200).send({
        title: "Node API Loja",
        version: "0.0.1"
    });
}

exports.token = async (req, res, next) => {
    try {
        var cliente = await clienteDao.findForAuth({
            email: req.body.email,
            senha: md5(req.body.senha)
        });

        if (!cliente) {
            res.status(404).send({ Message: "Cliente não encontrado ou credenciais invalidas." });
            return;
        } else {
            var token = await authService.generateToken({
                email: cliente.email,
                nome: cliente.nome
            });
            res.status(201).send({
                token,
                cliente: {
                    nome: cliente.nome,
                    email: cliente.email                    
                }
            });
        }
    } catch (error) {
        res.status(500).send({
            Message: "ocorreu um erro",
            Data: error
        })
    }
}