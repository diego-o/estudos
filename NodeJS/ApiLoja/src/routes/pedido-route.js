'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedido-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/numero/:numero', controller.getByNumero)
router.get('/cliente/:cliente', controller.getByCliente)

router.post('/', controller.post);

module.exports = router;