var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var positionScheme = new Schema(

    {

        longitude: {
            type: String
        },
        latitude: {
            type: String
        },
        orientation: {
            type: String
        },
       
    },

    {

        timestamps: true

    });

let Position = mongoose.model('Position', positionScheme);
module.exports = Position;

