import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const appointment=sequelize.define(
    "appointment",
    {
        appointment_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        patient_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        doctor_staff_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        appointment_datetime:{
            type:DataTypes.DATE,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM("Pending","Booked","Cancelled")
        }
    },
    {
        tableName:"appointment",
        timestamps:true,
        underscored:true,
        paranoid:true
    }
)


export default appointment;