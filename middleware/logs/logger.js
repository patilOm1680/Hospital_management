import winston from 'winston';
const { combine, timestamp, json } = winston.format;

// const customLevels = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3
// };

const logger = winston.createLogger({
  level: 'http',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: './middleware/logs/combined.log'
    }),
    new winston.transports.File({
      filename: './middleware/logs/error.log',
      level: 'error'  
    }),
  ],
});

export default logger;
