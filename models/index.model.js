import sequelize from "../config/database.js";
import appointment from "./appointment.model.js";
import patient from "./patient.model.js";
import staff from "./staff.model.js";
import role from "./role.model.js";
import doctor from "./doctor.model.js";

const db = {};

db.sequelize = sequelize;
db.appointment=appointment;
db.patient = patient;
db.doctor=doctor;
db.role=role;
db.staff = staff;

patient.belongsTo(staff, {
  foreignKey: "created_by",
  as: "createdByStaff",
});

staff.hasMany(patient, {
  foreignKey: "created_by",
  as: "createdPatients",
  onDelete:"CASCADE",
  hooks: true    
});



patient.hasMany(appointment,{
  foreignKey:"patient_id",
  as:"appointments"
})

appointment.belongsTo(patient,{
  foreignKey:"patient_id",
  as:"patient"
})

staff.hasMany(appointment,{
  foreignKey:"doctor_staff_id",
  as:"appointments"
});

appointment.belongsTo(staff,{
  foreignKey:"doctor_staff_id",
  as:"staff"
});


staff.belongsTo(role,{
  foreignKey:"role_id",
  as:"staffMembers"
});


role.hasMany(staff,{
  foreignKey:"role_id",
  as:"role"
});

staff.hasOne(doctor,{
  foreignKey:"staff_id",
  as:"doctor"
});

doctor.belongsTo(staff,{
  foreignKey:"staff_id",
  as:"staff"
})


export default db;
