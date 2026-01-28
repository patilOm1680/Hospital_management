import { Router } from "express";
import patientRoutes from "./patient.routes.js"
import staffRoutes from "./staff.routes.js";
import appointmentRoutes from "./appointment.routes.js";
import doctorRoutes from "./doctor.routes.js";
import { authMiddleware } from "../middleware/auth/authMiddleware.js";
import { loginController } from "../controllers/login.controller.js";
const router=Router();

router.use('/patients',authMiddleware,patientRoutes);

router.use('/staff',authMiddleware,staffRoutes);

router.use('/appointments',authMiddleware,appointmentRoutes);

router.use('/doctors',authMiddleware,doctorRoutes);

router.use('/login',loginController);

export default router;
