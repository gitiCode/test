const mongoose = require('mongoose');
const Joi = require('joi');

const bookingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
});

const Booking = mongoose.model('Booking',bookingSchema);

module.exports = {
    Booking,
}