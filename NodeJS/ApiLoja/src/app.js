'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

mongoose.connect(config.connectionString);

//carregando os models
const cliente = require('./models/cliente');
const produto = require('./models/produto');
const pedido = require('./models/pedido');

//carregando as rotas
const indexRoute = require('./routes/index-route');
const clienteRoute = require('./routes/cliente-route');
const produtoRoute = require('./routes/produto-route');
const pedidoRoute = require('./routes/pedido-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//adicionando rotas
app.use('/', indexRoute);
app.use('/cliente', clienteRoute);
app.use('/produto', produtoRoute);
app.use('/pedido', pedidoRoute);

module.exports = app;