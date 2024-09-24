/**
 * function that checks if rawSize has number
 * @param {string} rawSize raw size
 * @returns the number if exists, otherwise returns null
 */
export declare const hasNumber: (rawSize: string) => number;
/**
 * function that checks if rawSize has size unit
 * @param {string} rawSize raw size
 * @returns the unit if exists, otherwise returns null
 */
export declare const hasSizeUnit: (rawSize: string) => string;
/**
 * function that recieves a raw size and returns formatted size
 * @param {string} rawSize - size to convert
 * @param {string} unit - unit
 * @returns formatted bytes
 */
export declare const formatBytes: (rawSize: string, unit?: string) => string;
