import staff from "../models/staff.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import role from "../models/role.model.js";
import logger from "../middleware/logs/logger.js";

export const loginController = async (req, res) => {
  try {
    const user = await staff.findOne({ where: { email: req.body.email } });
    if (!user){
      logger.error({
        status: 404,
        message: "No record found with this credentials"
      });

      return res.status(404).json({
        status: 404,
        message: "No record found with this credentials",
      });
    } 

    const userRole = await role.findOne(
      { where: { role_id: user.role_id } },
      { attributes: ["role_name"] },
    );

    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (!isValid){
      logger.error({
        status: 401,
        message: "Invalid credentials !"
      });

      return res.status(401).json({
        status: 401,
        message: "Invalid credentials !"
      });
    }
      

    const token = jwt.sign(
      { id: user.staff_id, role: userRole.role_name },
      process.env.JWT_SECRET,
      { expiresIn: `${process.env.JWT_EXPIRES_TIME}` },
    );

    // console.log(token);
    logger.info({
      status:200,
      message:"User Successfully Logged In"
    })
    return res.json({ token });


  } catch (error) {
    logger.error({
      status: 500,
      message: "Something went wrong !",
      error: error.message
    })

    res.status(500).json({
      status: 500,
      message: "Something went wrong !",
      error: error.message,
    });

  }
};
