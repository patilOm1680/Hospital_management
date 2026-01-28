import db from "../models/index.model.js";
import staff from "../models/staff.model.js";

const {doctor}=db;

export const registerDoctor = async(doctorInfo) => {
    return await doctor.create(doctorInfo);
}


export const getDoctors = async() => {
    return await doctor.findAll({
        include:{
            model:staff,
            as:"staff"
        }
    });
}

export const updateDoctor = async(updatedData,id) => {
    return await doctor.update(updatedData,{where:{staff_id:id}})
}


export const deleteDoctorById = async(id) => {
    return await doctor.destroy({where:{staff_id:id}})
}
