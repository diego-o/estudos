'use strict';

const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign(data, global.PRIVATE_KEY, { expiresIn: 10 });
}

exports.decodeToken = async (token) => {
    return await jwt.verify(token, global.PRIVATE_KEY);
}

exports.authorize = function (req, res, next) {
    var token = req.headers['access-token'];

    if (!token) {
        res.status(401).json({ message: 'Acesso Negado' });
    } else {
        jwt.verify(token, global.PRIVATE_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({ message: 'Token Inválido' });
            } else {
                next();
            }
        });
    }
};