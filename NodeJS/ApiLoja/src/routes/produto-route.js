'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/codigo/:codigo', controller.getByCodigo);
router.get('/tag/:tag', controller.getByTag);

router.post('/', controller.post);
router.put('/:id', controller.put);

module.exports = router;