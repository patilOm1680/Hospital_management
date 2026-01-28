import { Router } from "express";
import {
  getAllPatient,
  addNewPatient,
  deleteById,
  updatePatient,
  getPatinetById,
  getPatientAppointmentById,
} from "../services/patient.service.js";
import logger from "../middleware/logs/logger.js";

export const getAllData = async (req, res) => {
  try {
    const data = await getAllPatient();
    res.status(200).json(data);
    // res.send("hello")
  } catch (error) {
    logger.error({
      status: 500,
      success:false,
      message: "Something went wrong while fetching patient data",
      error: error.message,
    });
    
    res.status(500).json({
      status: 500,
      success:false,
      message: "Something went wrong while fetching patient data",
      error: error.message,
    });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const data = await getPatinetById(req.params.id);
    if (data == null) {
      return res.status(404).json({
        status: 404,
        success:false,
        message: "Patient not found",
      });
    }
    return res.status(200).json(data);
  } catch (error) {
    logger.error({
      status: 500,
      success:false,
      message: "Something went wrong",
      error: error.message,
    });
    return res.status(500).json({
      status: 500,
      success:false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


export const registerPatient = async (req, res) => {
  try {
    const data = await addNewPatient(req.body);
    res.status(201).json(data);
  } catch (error) {
    logger.error({
      status: 500,
      success:false,
      message: "Something went wrong",
      error: error.message,
    });

    res.status(500).json({
      status: 500,
      success:false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const deletePatientById = async (req, res) => {
  try {
    const deleteCount = await deleteById(req.params.id);
    // console.log(deleteCount);

    if (deleteCount === 0) {
      return res.status(404).json({
        status: 404,
        success:false,
        message: "Patient not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Patient deleted successfully",
    });
  } catch (error) {
    logger.error({
      status: 500,
      success:false,
      message: "Something went wrong while deleting patient",
      error: error.message,
    });

    return res.status(500).json({
      status: 500,
      success:false,
      message: "Something went wrong while deleting patient",
      error: error.message,
    });
  }
};

export const updatePatientById = async (req, res) => {
  try {
    const [updateCount] = await updatePatient(req.body, req.params.id);
    // console.log(updateCount);

    if (updateCount === 0) {
      return res.status(404).json({
        status: 404,
        success:false,
        data: `Data not found for id ${req.params.id}`,
      });
    }
    return res.status(200).json({
      status: 200,
      data: `Data updated successfully for id ${req.params.id}`,
    });
  } catch (error) {
    logger.error({
      status: 500,
      success:false,
      message: "Something went wrong while updating patient record",
      error: error.message,
    });

    return res.status(500).json({
      status: 500,
      success:false,
      message: "Something went wrong while updating patient record",
      error: error.message,
    });
  }
};


export const getPatientAppointment = async(req,res) => {
  try {
    const data=await getPatientAppointmentById(req.params.id)
    if(data) return res.status(200).json(data);
    
    return res.status(404).json({
      status:404,
      success:false,
      message:`Patient record not found with id ${req.params.id}`
    })
  } catch (error) {
    logger.error({
      status:500,
      success:false,
      message:"Something went wrong !",
      error:error.message
    })
    return res.status(500).json({
      status:500,
      success:false,
      message:"Something went wrong !",
      error:error.message
    })
  }
  
}
