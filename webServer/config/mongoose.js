/**
 * Created by migdonio1 on 10/5/16.
 */
'use strict';

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/iot-wifi-switch");

var db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Database iot-wifi-switch connected...");
});

module.exports = mongoose;