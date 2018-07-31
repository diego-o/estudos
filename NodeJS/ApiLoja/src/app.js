'use strict';

'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

//conexão com banco de dados
mongoose.connect(config.connectionString);

//carregando os models
const cliente = require('./models/cliente');

//carregando as rotas
const indexRoute = require('./routes/index-route');
const clienteRoute = require('./routes/cliente-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//adicionar controllers
app.use('/', indexRoute);
app.use('/cliente', clienteRoute);

module.exports = app;