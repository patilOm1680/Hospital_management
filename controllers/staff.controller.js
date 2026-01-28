import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import staff from "../models/staff.model.js";
import { addNewStaff, deleteById, getAll, getAppointmentsOfDocById, getStaffById } from "../services/staff.service.js"
import role from "../models/role.model.js";

export const getAllStaff = async(req,res) => {
  try {
    const staffData= await  getAll();
    return res.status(200).json(staffData);
  } catch (error) {
    return res.status(500).json({
      status:500,
      message:"Something went wrong while fetching the staff record",
      error:error.message
    })
  }
    
}

export const getStaffInfoById = async(req,res) => {
  try {
    const staffData=await getStaffById(req.params.id);
  // console.log(staffData)
  if(staffData) return res.status(200).json(staffData);
  
  return res.status(404).json({
    status:404,
    message:"No staff record found"
  })
  } catch (error) {
    return res.status(500).json({
      status:500,
      message:"Something went wrong while fetching the staff record",
      error:error.message
    })
  }
  

}

export const registerStaff = async (req, res) => {
  try {
    const staffData = await addNewStaff(req.body);
    res.status(201).json(staffData);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong",
      error: error.message,
    });
    // console.log(error);
  }
};

export const deleteStaffById = async (req,res) => {
  try {
    const data=await deleteById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"Staff deleted Successfully !"
    })
  } catch (error) {
    return res.status(500).json({
      status:500,
      message:"Something went wrong while deleting the staff record",
      error:error.message
    })
  }
    
}

export const getDocAppointmentsById = async(req,res) => {
  try {
    const data=await getAppointmentsOfDocById(req.params.id);
    if(data) return res.status(200).json(data);
    return res.status(404).json({
      status:404,
      message:`No record found with id ${req.params.id}`
    })
  } catch (error) {
     return res.status(500).json({
      status:500,
      message:"Something went wrong while fetching the Appointments",
      error:error.message
    })
  }
  
};

