import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const role = sequelize.define("role", {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  role_name: {
    type: DataTypes.ENUM("Doctor", "Nurse", "Receptionalist", "Accountant","Admin"),
    allowNull: false,
  },
},
{
    tableName:"role",
    timestamps:false
}
);


export default role;
