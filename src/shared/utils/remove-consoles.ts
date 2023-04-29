/* eslint-disable */
// @ts-nocheck
export const GlobalDebug = (function () {
  const savedConsole = console;
  /**
   * @param {boolean} debugOn
   * @param {boolean} suppressAll
   */
  return function (debugOn: boolean, suppressAll: boolean) {
    if (!debugOn) {
      console = {};
      console.log = function () {};
      if (suppressAll) {
        console.info = function () {};
        console.warn = function () {};
        console.error = function () {};
        console.debug = function () {};
      } else {
        console.info = savedConsole.info;
        console.warn = savedConsole.warn;
        console.error = savedConsole.error;
        console.debug = savedConsole.debug;
      }
    } else {
      console = savedConsole;
    }
  };
})();
