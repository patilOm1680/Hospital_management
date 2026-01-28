import { Router } from "express";
import { deleteStaffById, getAllStaff, getDocAppointmentsById, getStaffInfoById, registerStaff } from "../controllers/staff.controller.js";
import { authRole } from "../middleware/auth/authRole.js";

const router=Router();

router.get('/',authRole("Admin"),getAllStaff);

router.get('/:id',authRole("Admin"),getStaffInfoById)

router.post('/',authRole("Admin"),registerStaff);

router.delete('/:id',authRole("Admin"),deleteStaffById)

router.get('/appointments/:id',authRole("Admin","Doctor","Receptionalist"),getDocAppointmentsById);

export default router;
