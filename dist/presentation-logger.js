!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("next-core-logger")):"function"==typeof define&&define.amd?define("presentation-logger",["next-core-logger"],o):"object"==typeof exports?exports["presentation-logger"]=o(require("next-core-logger")):e["presentation-logger"]=o(e["next-core-logger"])}(this,(function(e){return function(e){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=o,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)r.d(t,n,function(o){return e[o]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="/dist/",r(r.s=1)}([function(o,r){o.exports=e},function(e,o,r){"use strict";var t=l(r(2)),n=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}e.exports.ColorConsoleLogger=t.default,e.exports.ConsoleLogger=n.default},function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=r(0);o.default=class extends t.AbstractLogger{constructor(e){super(e)}_getLogTime(){return""}_logMe(e,...o){e===t.Level.INFO?console.info(`%c ${o[0]} ${o[1]}`,"color: blue;"):e===t.Level.ERROR?console.error(`%c ${o[0]} ${o[1]}`,"color: red;"):e===t.Level.DEBUG?console.log(`%c ${o[0]} ${o[1]}`,"color: gray;"):e===t.Level.WARN?console.warn(`%c ${o[0]} ${o[1]}`,"color: brown;"):console.log(`%c ${o[0]} ${o[1]}`,"color: black;")}}},function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=r(0);o.default=class extends t.AbstractLogger{constructor(e){super(e)}_getLogTime(){return""}_logMe(e,...o){e===t.Level.INFO?console.info(...o):e===t.Level.ERROR?console.error(...o):e===t.Level.DEBUG?console.log(...o):e===t.Level.WARN?console.warn(...o):console.log(...o)}}}])}));
//# sourceMappingURL=presentation-logger.js.map