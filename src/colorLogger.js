import Augmented from "augmentedjs-next";

/**
 * Color Console Logger
 * @param {Logger.Level} l The level to initialize the logger with
 * @memberof Logger
 * @extends AbstractLogger
 */
class ColorConsoleLogger extends Augmented.Logger.AbstractLogger {
  constructor(l) {
    super(l);
  };
  _getLogTime() {
    return "";
  };

  _logMe(message, level) {
    if (level === Augmented.Logger.Level.INFO) {
      console.info(`%c${message}`, "color: blue;");
    } else if (level === Augmented.Logger.Level.ERROR) {
      console.error(`%c${message}`, "color: red;");
    } else if (level === Augmented.Logger.Level.DEBUG) {
      console.log(`%c${message}`, "color: gray;");
    } else if (level === Augmented.Logger.Level.WARN) {
      console.warn(`%c${message}`, "color: brown;");
    } else {
      console.log(`%c${message}`, "color: black;");
    }
  };
};

export default ColorConsoleLogger;
