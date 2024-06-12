const mongoose = require('mongoose');
const Joi = require('joi');

const bookingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:2,
        maxlength:250
    },
    author:{
        type:String,
        required:true,
        minlength:2,
        maxlength:250
    },
    description:{
        type:String,
        required:true,
        maxlength:500
    },
    price:{
        type:Number,
        default:0,
    }
});

const Booking = mongoose.model('Booking',bookingSchema);

module.exports = {
    Booking,
}
