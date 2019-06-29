import { AbstractLogger, Level } from "next-core-logger";

/**
 * Console Logger
 * @param {Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
class ConsoleLogger extends AbstractLogger {
  constructor(l) {
    super(l);
  };
  _getLogTime() {
    return "";
  };

  _logMe(level, ...message) {
    if (level === Level.INFO) {
      console.info(...message);
    } else if (level === Level.ERROR) {
      console.error(...message);
    } else if (level === Level.DEBUG) {
      console.log(...message);
    } else if (level === Level.WARN) {
      console.warn(...message);
    } else {
      console.log(...message);
    }
  };
};

export default ConsoleLogger;
