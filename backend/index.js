const express = require('express');
const app = express();
const server = require('https').createServer(app);
const io = require('socket.io').listen(server);
const port = process.env.PORT || 8000;
var connect = require('./dbconnection');
var Position = require('./positionScheme');
var router = express.Router();

router.get('/', function (req,res){
    res.send('Home');
})


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


module.exports = router;





