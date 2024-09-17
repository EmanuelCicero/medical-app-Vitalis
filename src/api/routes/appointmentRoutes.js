const express = require('express');
const { createAppointment, updateAppointment, getAppointment, deleteAppointment } = require('../controllers/appointmentController');

const router = express.Router();

router.get('/:id', getAppointment); 
router.post('/', createAppointment); 
router.put('/:id', updateAppointment); 
router.delete('/:id', deleteAppointment); 

module.exports = router;
