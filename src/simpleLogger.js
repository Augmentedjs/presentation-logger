import { Level } from "next-core-logger";
import ConsoleLogger from "./logger.js";

class SimpleLogger extends  ConsoleLogger {
  constructor(l) {
    super(l);
    this.loggerLevel = (l) ? l : Level.INFO;
    this.label = Level;
  };

  /**
   * log a message with default level
   * @param {string} message The message to log
   * @param {Logger.Level} level The level of the log message
   * @returns {Any} The message
   */
  log(...message) {
    return this.info(...message);
  };

  /**
   * Logs a message in info level
   * @param {Any} message
   */
  info(...message) {
    return this._logMe(Level.INFO, ...message);
  };

  /**
   * Log a message in error level
   * @param {Any} message
   */
  error(...message) {
    return this._logMe(Level.ERROR, ...message);
  };

  /**
   * Log a message in debug level
   * @param {Any} message
   */
  debug(...message) {
    return this._logMe(Level.DEBUG, ...message);
  };

  /**
   * Log a message in warn level
   * @param {Any} message
   */
  warn(...message) {
    return this._logMe(Level.WARN, ...message);
  };
};

export default SimpleLogger;
