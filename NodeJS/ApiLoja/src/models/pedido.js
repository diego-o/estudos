'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    numero: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    data:{
        type: Date,
        required: true,
        default: Date.now
    },
    items: [{
        quantidade:{
            type: Number,
            require: true,
            default: 1
        },
        valor:{
            type: Number,
            require: true
        },
        produto:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto'
        }
    }] 
});

module.exports = mongoose.model('Pedido', schema);