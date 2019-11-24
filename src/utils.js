/**
 * Capitalize first letter of string
 * @private
 * @param  {string} - String
 * @return {string} - String with first letter capitalized
 */
export function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

/**
 * Clamp position between a range
 * @param  value {number} - Value to be clamped
 * @param  min {number} - Minimum value in range
 * @param  max {number} - Maximum value in range
 * @return {number} - Clamped value
 */
export function clamp (value, min, max) {
  return Math.min(Math.max(value, min), max)
}
