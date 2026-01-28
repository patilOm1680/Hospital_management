import { Router } from "express";
import { createNewAppointment, deleteAppointmentById, getAllAppointments, updateAppointmentById } from "../controllers/appointment.controller.js";
import { authRole } from "../middleware/auth/authRole.js";

const router=Router();

router.get('/',authRole("Doctor","Receptionalist","Admin","Nurse"),getAllAppointments);

router.post('/',authRole("Receptionalist"),createNewAppointment);

router.delete('/:id',authRole("Admin","Receptionalist"),deleteAppointmentById);

router.patch('/:id',authRole("Doctor","Receptionalist","Nurse"),updateAppointmentById);

export default router;
