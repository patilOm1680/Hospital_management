import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const staff=sequelize.define(
    "staff",
    {
        staff_id:{
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
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contact_no:{
            type:DataTypes.STRING,
            allowNull:false
        },
        role_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        tableName:"staff",
        timestamps:true,
        underscored:true,
        paranoid:true
    }
)


export default staff;