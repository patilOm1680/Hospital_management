
import db from "../models/index.model.js"

const {patient,appointment,staff}= db;

export const getAllPatient = async () => {
    return await patient.findAll(); 
}

export const getPatinetById = async(id) => {
    return await patient.findByPk(id);
}

export const addNewPatient = async (userData) => {
    console.log(userData);
    return await patient.create(userData); 
}


export const deleteById = async(id) => {
    return await patient.destroy({where:{patient_id:id}})
}


export const updatePatient = async(updatedData,id) => {
    return await patient.update(updatedData,{where:{patient_id:id}})
}

export const getPatientAppointmentById = async(id) => {
    return await patient.findByPk(id,{
        include:{
            model:appointment,
            as:"appointments",
             include: {
          model: staff,
          as: "staff", 
          attributes: ["staff_id", "first_name", "last_name"]
        }
        }
    });

}