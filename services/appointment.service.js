import db from "../models/index.model.js";

const {appointment}=db;

export const getAppointments = async() => {
    return await appointment.findAll();
}

export const createAppointment = async(appointmentData) => {
    return await appointment.create(appointmentData);
}

export const deleteAppointment = async(id) => {
    return await appointment.destroy({where:{appointment_id:id}})
}

export const updateAppointment = async(updatedData,id) => {
    return await appointment.update(updatedData,{where:{appointment_id:id}})
}