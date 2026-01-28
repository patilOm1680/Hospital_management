import logger from "../middleware/logs/logger.js";
import { createAppointment, deleteAppointment, getAppointments, updateAppointment,
} from "../services/appointment.service.js";

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await getAppointments();

    logger.info({
      status:200,
      message:"Appointments Fetched successfully"
    });

    return res.status(200).json(appointments);
  } catch (error) {

    logger.error({
      status: 500,
      message: "Something went wrong while fetching appointments",
      error: error.message
    });

    return res.status(500).json({
      status: 500,
      message: "Something went wrong while fetching appointments",
      error: error.message
    });
  }
};

export const createNewAppointment = async (req, res) => {
  try {
    const appointmentData = await createAppointment(req.body);

    logger.info({
      status:200,
      message:"New Appointment created successfully"
    });

    return res.status(201).json(appointmentData);
  } catch (error) {

    logger.error({
      status: 500,
      message: "Something went wrong while creating the appointment",
      error: error.message,
    });
    
    return res.status(500).json({
      status: 500,
      message: "Something went wrong while creating the appointment",
      error: error.message,
    });
  }
};

export const deleteAppointmentById = async (req, res) => {
  try {
    const deleteCount = await deleteAppointment(req.params.id);
    // console.log(deleteCount);

    if (deleteCount === 0) {
      return res.status(404).json({
        status: 404,
        message: "Appointment not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong while deleting Appointment",
      error: error.message,
    });
  }
};

export const updateAppointmentById = async (req, res) => {
  try {
    const [updateCount] = await updateAppointment(req.body, req.params.id);
    // console.log(updateCount);

    if (updateCount === 0) {
      return res.status(404).json({
        status: 404,
        data: `Appointment not found for id ${req.params.id}`,
      });
    }
    return res.status(200).json({
      status: 200,
      data: `Appointment updated successfully for id ${req.params.id}`,
    });
  } catch (error) {
    logger.error({
      status: 500,
      message: "Something went wrong while updating the Appointment",
      error: error.message,
    })
    return res.status(500).json({
      status: 500,
      message: "Something went wrong while updating the Appointment",
      error: error.message,
    });
  }
};
