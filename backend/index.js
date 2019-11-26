const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const port = 4000;
var connect = require('./dbconnection');
var Position = require('./positionScheme');


server.listen(port, () => console.log('Verbonden met poort ' + port));

io.on('connection', socket => {
    console.log('HEEEEEEUYYYY');

        socket.on('position', function(data){
            io.sockets.emit('position', data);

            connect.then(db => {
                console.log("connected to the database");
    
                let position = new Position({longitude: data.long, latitude: data.lat, orientation: data.orientation});
                position.save();
            });
        });

       
    });








