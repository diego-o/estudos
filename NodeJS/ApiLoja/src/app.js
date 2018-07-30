'use strict';

'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//conexão com banco de dados
//mongoose.connect(config.connectionString);

//carregando os models

//carregando as rotas
const indexRoute = require('./routes/index-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//adicionar controllers
app.use('/', indexRoute);

module.exports = app;