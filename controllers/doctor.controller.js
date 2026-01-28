import { deleteDoctorById, getDoctors, registerDoctor, updateDoctor } from "../services/doctor.service.js";

export const createDoctor = async (req, res) => {
  try {
    const data = await registerDoctor(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong while registering the doctor",
      error: error.message,
    });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const data = await getDoctors();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong while fetching the doctors record",
      error: error.message,
    });
  }
};

export const updateDoctorById = async (req, res) => {
  try {
    const [updateCount] = await updateDoctor(req.body, req.params.id);
    // console.log(updateCount);

    if (updateCount === 0) {
      return res.status(404).json({
        status: 404,
        data: `Record not found for id ${req.params.id}`,
      });
    }
    return res.status(200).json({
      status: 200,
      data: `Record updated successfully for id ${req.params.id}`,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong while updating doctor record",
      error: error.message,
    });
  }
};


export const deleteDoctor = async (req, res) => {
  try {
    const deleteCount = await deleteDoctorById(req.params.id);
    // console.log(deleteCount);

    if (deleteCount === 0) {
      return res.status(404).json({
        status: 404,
        message: "Doctor not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong while deleting doctor's record",
      error: error.message,
    });
  }
};
