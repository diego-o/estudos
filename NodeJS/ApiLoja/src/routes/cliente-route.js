'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/cpf/:cpf', controller.getByCpf);

router.post('/', controller.post);
router.put('/:id', controller.put);

module.exports = router;