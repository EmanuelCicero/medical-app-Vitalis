const mongoose = require('mongoose');
const User = require('./User');

const AppointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dateAppointment: { type: Date, required: true },
    timeAppointment: { type: String, required: true },
    source: { type: String, required: true },
    title: {type: String, required: true },
    specialty: {type: String, required: true},
    clinic: {type: String, required: true}
}, { timestamps: true }); 

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
