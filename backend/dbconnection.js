
//Required variables for the connection to the MongoDB
var mongoose = require('mongoose');
mongoose.Promise  = require("bluebird");

//Make connection with the MongoDB Cluser in MongoDB Atlas 
let uri = "mongodb+srv://ivozee:f1jhPm1wy0ETBrkH@cluster-qhdmu.mongodb.net/crowdcontrol?retryWrites=true&w=majority";
var connect = mongoose.connect(uri, {useNewUrlParser: true});
module.exports = connect;