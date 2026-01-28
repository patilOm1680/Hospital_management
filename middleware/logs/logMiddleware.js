import logger from "./logger.js";

export const logMiddleware = (req, res, next) => {
  const startDateTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startDateTime;

    // console.log(duration)
    
    logger.info("HTTP Request", {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`
    });

  });

  next();
};

