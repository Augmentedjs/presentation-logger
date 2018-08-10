import Augmented from "augmentedjs-next";
import { request } from "presentation-request";

/**
 * REST Logger - *requires override of _logMe
 * @param {Logger.Level} l The level to initialize the logger with
 * @extends AbstractLogger
 * @deprecated
 */
class RestLogger extends Augmented.Logger.AbstractLogger {
  constructor(l, uri) {
    super(l);
    this._uri = uri;
  };
  /**
   * @property {string} uri The URI to use for RestLogger
   */
  set uri(uri) {
    this._uri = uri;
  };
  get uri() {
    return this._uri;
  };

  _logMe(message) {
    const success = (data, status) => {
      // yippee!!!
    },
    error = (e) => {
      throw new Error(e);
    };

    request({
      url: this._uri,
      method: "POST",
      contentType: "text/plain",
      dataType: "text",
      async: true,
      data: message,
      success: (data, status) => {
        success(data, status);
      },
      failure: (e) => {
        this.failure(e);
      }
    });
  };
};

export default RestLogger;
