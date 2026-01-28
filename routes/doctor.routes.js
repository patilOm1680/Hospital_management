import { Router } from "express";
import { createDoctor, deleteDoctor, getAllDoctors, updateDoctorById } from "../controllers/doctor.controller.js";
import { authRole } from "../middleware/auth/authRole.js";

const router=Router();


router.post('/',authRole("Admin"),createDoctor);

router.get('/',authRole("Doctor","Admin","Receptionalist","Nurse"),getAllDoctors);

router.patch('/:id',authRole("Admin"),updateDoctorById);

router.delete('/:id',authRole("Admin"),deleteDoctor);

export default router;