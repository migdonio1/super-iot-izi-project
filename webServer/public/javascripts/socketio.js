/**
 * Created by migdonio1 on 10/10/16.
 */
var io = io.connect('http://localhost:3000');

io.emit('subscribe', {
    data: "Hola socketio"
});

io.on('subscribe', function(users) {
/*
    console.log(users);
*/
});

io.emit('changeSwitchStatus', {
    username: "anakin20",
    deviceName: "Salon CC5",
    switchStatus: "activo"
});

io.on('changeSwitchStatus', function(user) {
    console.log(user);
});

io.emit('toggleLedDemo' , {
    data: 1
});