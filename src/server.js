import app from "./app.js";
import sequelize from "../config/database.js"; 
import logger from "../middleware/logs/logger.js";

export const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    console.log(" Database connected");

    const port=process.env.PORT;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      logger.info(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error(" Database connection failed:", error);
    logger.error("Database connection failed !")
  }
};