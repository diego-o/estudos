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

exports.findForAuth = async (data) => {
    return await Cliente.findOne({
        email: data.email,
        senha: data.senha
    }, 'nome cpf email endereco');
}

exports.create = async (data) => {
    var cliente = new Cliente(data);
    await cliente.save();
}

exports.update = async (id, data) => {
    await Cliente.findByIdAndUpdate(id, {
        $set: {
            nome: data.nome,
            endereco: {
                cep: data.endereco.cep,
                logradouro: data.endereco.logradouro,
                bairro: data.endereco.bairro,
                cidade: data.endereco.cidade,
                uf: data.endereco.uf,
                complemento: data.endereco.complemento
            }
        }
    });
}
