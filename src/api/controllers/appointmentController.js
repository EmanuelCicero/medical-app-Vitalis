const { makeAppointment, updateAppointmentById, getAppointmentByUserId, deleteAppointmentById } = require('../services/appointmentService');

const getAppointment = async (req, res) => {
    try {
        const appointment = await getAppointmentByUserId(req.params.id);
        res.status(200).json(appointment);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

const createAppointment = async (req, res) => {
    try {
        const userId = req.body.userId; 
        const newAppointment = await makeAppointment(userId, req.body);
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await updateAppointmentById(req.params.id, req.body);
        res.status(200).json(updatedAppointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await deleteAppointmentById(req.params.id);
        res.status(200).json({ message: 'Appointment deleted', deletedAppointment });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

module.exports = { createAppointment, updateAppointment, getAppointment, deleteAppointment };
