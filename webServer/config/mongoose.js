/**
 * Created by migdonio1 on 10/5/16.
 */
'use strict';

var mongoose = require('mongoose');

module.exports =  {
    start: function() {
        mongoose.connect("mongodb://localhost:27017/iot-wifi-switch");

        var db = mongoose.connection;

        db.on("error", console.error.bind(console, 'connection error:'));

        db.once('open', function() {
            console.log("Database iot-wifi-switch connected...");
        });

        require("../models/Switch.model");
        require("../models/Sensor.model");
        require("../models/Device.model");
        require("../models/User.model");
    }
};