// import serverStatus from "./serverStatus";
import { items } from "./items";

const MAX_DELAY = 0;

// const isInRange = (range, value) => {
//   return value >= range.min && value < range.max;
// };

// const getResponse = responseBody => {
//   const failFactorRange = { min: 0.85, max: 1 };
//   const notAuthorisedRange = { min: 0.75, max: 0.85 };
//   const status = Math.random();
  
//   if (isInRange(failFactorRange, status)) {
//     throw new Error(serverStatus.INTERNAL_SERVER_ERROR);
//   } else if (isInRange(notAuthorisedRange, status)) {
//     throw new Error(serverStatus.UNAUTHORIZED);
//   }
//   return { body: responseBody };
// };

/**
 * @typedef {Object} ServerResponse
 * @property {any} body
 * @property {number} error
 */
/**
 * @function mockFetch
 * @params {string} endpoint
 * @returns {Promise<ServerResponse>}
*/
export const mockFetch = () => {
  const serverDelay = MAX_DELAY * Math.random();
  return new Promise(resolve => {
    // let response = null;
    setTimeout(() => {
      resolve(items);
    }, serverDelay);
  });
};
