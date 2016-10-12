/**
 * Created by migdonio1 on 10/12/16.
 */
var Device = require('../models/User.model');
var User = require('../models/User.model');

var UserController = {
    socket: [],
    subscribe: function(data) {
        console.log(data);

/*        User.find({}, function (err, users) {
            Device.populate(users, {path: "devices"}, function (err, users) {
                var usersJSON = users.map(function(user) {
                    return user.toJSON();
                });

                UserController.socket.emit('subscribe', usersJSON);
            });
        });*/
        User.find().deepPopulate('devices.switchs devices.sensors').exec(function (err, users) {
            if (err) {
                console.log(err);
            } else {
                var usersJSON = users.map(function(user) {
                    return user.toJSON();
                });

                UserController.socket.emit('subscribe', usersJSON);
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
    }
};

module.exports = UserController;