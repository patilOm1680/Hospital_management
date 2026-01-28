import { Router } from "express";
import { deletePatientById, getAllData, getPatientAppointment, getPatientById, registerPatient, updatePatientById } from "../controllers/patient.controller.js";
import { authRole } from "../middleware/auth/authRole.js";
const router=Router();

router.get('/',authRole("Receptionalist","Admin","Doctor","Nurse"),getAllData);

router.get('/:id',authRole("Receptionalist","Admin","Doctor","Nurse"),getPatientById);

router.post("/",authRole("Receptionalist","Admin"),registerPatient);

router.delete("/:id",authRole("Receptionalist","Admin"), deletePatientById);

router.patch("/:id",authRole("Receptionalist","Admin"),updatePatientById);

router.get("/appointment/:id",authRole("Receptionalist","Admin","Doctor","Nurse"),getPatientAppointment);

export default router