const { createLogger, format, transports } = require('winston');
const path = require('path');

// Create the app.log
const logDirectory = path.join(__dirname, 'logs');
const logFile = path.join(logDirectory, 'app.log');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  //The way that we can see the log. We can see it both in logs/app.log and console.
  transports: [
    new transports.File({ filename: logFile }),
    new transports.Console() 
  ],
});

module.exports = logger;
