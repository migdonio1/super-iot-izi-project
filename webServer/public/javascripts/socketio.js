/**
 * Created by migdonio1 on 10/10/16.
 */
var io = io.connect('http://localhost:3000');

io.emit('subscribe', {
    data: "Hola socketio"
});