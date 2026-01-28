import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const doctor=sequelize.define(
    "doctor",
    {
        staff_id:{
            type:DataTypes.INTEGER
        },
        qualification:{
            type:DataTypes.STRING,
            allowNull:false
        },
        licence_no:{
            type:DataTypes.STRING,
            allowNull:false
        },
        experience:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        consultancy_fee:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        tableName:"doctor",
        timestamps:true,
        underscored:true,
        paranoid:true
    }
)


export default doctor;