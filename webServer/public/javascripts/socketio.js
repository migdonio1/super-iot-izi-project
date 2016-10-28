/**
 * Created by migdonio1 on 10/10/16.
 */
var io = io.connect('http://localhost:3000');

io.emit('subscribe', {
    data: "Hola IoT"
});

io.on('subscribe', function(users) {

});

io.emit('changeSwitchStatus', {
    username: "anakin20",
    deviceName: "Salon CC5",
    switchStatus: "activo"
});

io.on('changeSwitchStatus', function(user) {
    console.log(user);
});

io.on('toggleLedDemo', function(data) {
    console.log("LED Actualizado");
    textStatus = document.getElementById("ledStatus");
    if(data.status == 1) {
        textStatus.innerHTML = " Encendido";
        textStatus.setAttribute("class", "on");
    }else {
        textStatus.innerHTML = " Apagado";
        textStatus.setAttribute("class", "off");
    }
});