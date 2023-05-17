/* eslint-disable */
// @ts-nocheck
export const GlobalDebug = (() => {
  const savedConsole = console;
  /**
   * @param {boolean} debugOn
   * @param {boolean} suppressAll
   */
  return (debugOn: boolean, suppressAll: boolean) => {
    if (!debugOn) {
      console = {};
      console.log = () => {};

      if (suppressAll) {
        console.info = () => {};
        console.warn = () => {};
        console.error = () => {};
        console.debug = () => {};
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
