const Appointment = require('../models/Appointment');

const getAppointmentByUserId = async (userId) => {
    try {
        const appointment = await Appointment.find({'userId': userId });
        if (!appointment) throw new Error('Appointment not found');
        return appointment;
    } catch (error) {
        throw new Error(error.message);
    }
};

const makeAppointment = async (userId, userAppointment) => {
    try {
        const appointment = new Appointment({ ...userAppointment, userId });
        await appointment.save();
        return appointment;
    } catch (error) {
        throw new Error(error.message);
    }
};

const updateAppointmentById = async (id, updateData) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedAppointment) throw new Error('Appointment not found');
        return updatedAppointment;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteAppointmentById = async (id) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete({'_id': id});
        if (!deletedAppointment) throw new Error('Appointment not found');
        return deletedAppointment;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { makeAppointment, updateAppointmentById, getAppointmentByUserId, deleteAppointmentById };
