/**
 * Created by migdonio1 on 10/12/16.
 */
var User = require('../models/User.model');

const util = require('util');

var UserController = {
    socket: [],
    serial: [],
    subscribe: function(data) {
        console.log(data);

        User.find().deepPopulate('devices.switchs devices.sensors').exec(function (err, users) {
            if (err) {
                console.log(err);
            } else {
/*
                UserController.socket.emit('subscribe', JSON.stringify(users[0]));
*/
            }
        });
    },
    changeSwitchStatus: function(data) {
        console.log(data.deviceName);

        User.find({
            "devices.name": {
                "$in": ["Salon CC5"]
            }
        })
            .deepPopulate('devices').exec(function (err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
                console.log(util.inspect(user, {showHidden: false, depth: null}));
                UserController.socket.emit('changeSwitchStatus', JSON.stringify(user));
            }
        });
    },
    populateDemo: function() {
        User
            .find()
            .populate('devices devices.sensors')
            .exec(function (err, users) {
                console.log(users);
                var usersJSON = users.map(function(user) {
                    return user.toJSON();
                });

                JSON.stringify(usersJSON);
                console.log(usersJSON);
            })
    },
    toggleLed: function(info) {
        console.log("info: ", info);

        var sendData;
        if(info.data == 1) {
            sendData = new Buffer([0x31]);
            UserController.serial.write(sendData, function(err) {
                if(err) {
                    console.log('Error on write: ', err.message);
                } else {
                    UserController.socket.emit("toggleLedDemo", {status: 1});
                    UserController.toggletmp = 0;
                    console.log("send: ", sendData);
                    console.log("Se prendio el led");
                }
            });
        } else if (info.data == 0) {
            sendData = new Buffer([0x30]);
            UserController.serial.write(sendData, function(err){
                if(err) {
                    console.log('Error on write: ', err.message);
                } else {
                    UserController.socket.emit("toggleLedDemo", {status: 0});
                    UserController.toggletmp = 1;
                    console.log("send: ", sendData);
                    console.log("Se apago el led");
                }
            });

        }
        console.log("Se actualizo el led");
    }
};

module.exports = UserController;