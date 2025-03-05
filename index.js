const moveXLines = require("./macros/moveXLines");
const toggleLineNumbers = require("./macros/toggleLineNumbers");

/**
 * Macro configuration settings
 * { [name: string]: {              ... Name of the macro
 *    no: number,                   ... Order of the macro
 *    func: ()=> string | undefined ... Name of the body of the macro function
 *  }
 * }
 */

module.exports.macroCommands = {
  moveXLines: {
    no: 1,
    func: moveXLines,
  },
  toggleLineNumbers: {
    no: 2,
    func: toggleLineNumbers,
  },
};
