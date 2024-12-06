const { createLogger, format, transports } = require('winston');
const path = require('path');

// Create the nutrients.log
const logDirectory = path.join(__dirname, 'nutrients');
const logFile = path.join(logDirectory, 'nutrients.log');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({ filename: logFile }),
    new transports.Console()
  ],
});

module.exports = logger;
