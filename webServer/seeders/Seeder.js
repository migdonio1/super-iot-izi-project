/**
 * Created by migdonio1 on 10/8/16.
 */
'use strict';

var User = require('../models/User.model');

var user = User({
    username: 'migdonio4',
    password: '123456',
    name: {
        first: 'Raul Migdonio',
        last: 'Rodriguez Te'
    },
    email: 'raulmigdonio3@gmail.com'
});

user.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Usuario prueba creado');
    }
});