
import winston =require("winston")

// Configuración
const LoggerAPI= winston.createLogger({
  level: 'info', // niveles: error, warn, info, http, verbose, debug, silly
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'errores.log', level: 'error' }),
    new winston.transports.File({ filename: 'completo.log' })
  ],
});
export {LoggerAPI }