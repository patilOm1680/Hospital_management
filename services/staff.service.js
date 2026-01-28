import appointment from "../models/appointment.model.js";
import db from "../models/index.model.js"
import bcrypt from "bcryptjs";

const {staff}=db;

export const getAll = async() => {
    return await staff.findAll();
}

export const getStaffById = async(id) => {
    return await staff.findByPk(id);
}


export const addNewStaff = async (staffData) => {
    // console.log(userData);
    const {password}=staffData;
    const hashPassword=await bcrypt.hash(password,10);
    const data=structuredClone(staffData);
    data.password=hashPassword;
    return await staff.create(data); 
}

export const deleteById = async(id) => {
    return await staff.destroy({where:{staff_id:id}})
}

export const getAppointmentsOfDocById = async(id) => {
    return await staff.findByPk(id,{
        include:{
            model:appointment,
            as:"appointments"
        }
    });
}

