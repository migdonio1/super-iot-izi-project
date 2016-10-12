/**
 * Created by migdonio1 on 10/8/16.
 */
'use strict';

var mongoose = require('../config/mongoose');
mongoose.start();

var Sensor = require('../models/Sensor.model'),
    Switch = require('../models/Switch.model'),
    Device = require('../models/Device.model'),
    User = require('../models/User.model');

var sensor = new Sensor({
    name: "Termometro",
    type: "temperatura prueba",
    status: "inactivo"
});
sensor.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Sensor prueba creado');
    }
});

var switch1 = new Switch({
    name: "Focos delanteros",
    status: "inactivo"
});
switch1.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Switch prueba creado');
    }
});

var device = new Device({
    name: "Salon CC5",
    position: {
        latitude: "21.047841",
        longitude: "-89.644237"
    },
    status: "inactivo",
    sensors: [
        sensor._id
    ],
    switchs: [
        switch1._id
    ]
});
device.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Dispositivo prueba creado');
    }
});

var user = new User({
    username: 'anakin20',
    password: '123456',
    name: {
        first: 'Raul Migdonio',
        last: 'Rodriguez Te'
    },
    email: 'anakinvader98@gmail.com',
    devices: [
        device._id
    ]
});

user.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Usuario prueba creado');
    }
});