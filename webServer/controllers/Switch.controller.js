/**
 * Created by migdonio1 on 10/12/16.
 */
var Switch = require('../controllers/Switch.controller');

var SwitchController = {
    read: function() {
        Switch.find({}, function(err, switchs) {

        });
    }
};