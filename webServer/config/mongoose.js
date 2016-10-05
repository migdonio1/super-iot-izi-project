/**
 * Created by migdonio1 on 10/5/16.
 */
'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/iot-wifi-switch');
console.log('Database is connected...');

module.exports = mongoose;