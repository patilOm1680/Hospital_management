import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";


const patient=sequelize.define(
    "patient",
    {
        patient_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        first_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        last_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        date_of_birth:{
            type:DataTypes.STRING,
            allowNull:false
        },
        blood_group:{
            type:DataTypes.STRING,
            allowNull:false
        },
        gender:{
            type:DataTypes.ENUM("male","female"),
            allowNull:false
        },
        contact_no:{
            type:DataTypes.STRING,
            allowNull:false
        },
        created_by:{
            type:DataTypes.INTEGER
        }
    },
    {
        tableName:"patient",
        timestamps:true,
        underscored:true,
        paranoid:true
    }
)

export default patient