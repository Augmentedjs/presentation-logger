import { AbstractLogger, Level } from "next-core-logger";

/**
 * Color Console Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
class ColorConsoleLogger extends AbstractLogger {
  constructor(l) {
    super(l);
  };
  _getLogTime() {
    return "";
  };

  _logMe(level, ...message) {
    if (level === Level.INFO) {
      console.info(`%c ${message[0]} ${message[1]}`, "color: blue;");
    } else if (level === Level.ERROR) {
      console.error(`%c ${message[0]} ${message[1]}`, "color: red;");
    } else if (level === Level.DEBUG) {
      console.log(`%c ${message[0]} ${message[1]}`, "color: gray;");
    } else if (level === Level.WARN) {
      console.warn(`%c ${message[0]} ${message[1]}`, "color: brown;");
    } else {
      console.log(`%c ${message[0]} ${message[1]}`, "color: black;");
    }
  };
};

export default ColorConsoleLogger;
