export declare enum BinaryUnit {
    B = "B",
    Gi = "Gi",
    Ki = "Ki",
    Mi = "Mi",
    Ti = "Ti"
}
export declare const multipliers: Record<string, number>;
export declare const customUnits: {
    IS: ({
        from: number;
        to: number;
        unit: string;
        long?: undefined;
    } | {
        from: number;
        long: string;
        to: number;
        unit: string;
    } | {
        from: number;
        long: string;
        unit: string;
        to?: undefined;
    })[];
};
export declare const binaryUnits: {
    IS: ({
        from: number;
        to: number;
        unit: string;
        long?: undefined;
    } | {
        from: number;
        long: string;
        to: number;
        unit: string;
    } | {
        from: number;
        long: string;
        unit: string;
        to?: undefined;
    })[];
};
/**
 * A function to return unit for disk size/memory with 'B' suffix.
 * @param {BinaryUnit | string} unit - unit
 * @returns {string}
 */
export declare const toIECUnit: (unit: BinaryUnit | string) => string;
/**
 * A function to return the string for displaying more readable disk size/memory info
 * @param {string} combinedStr - string containing both the value and the unit
 * @returns {string} string for displaying the value and the unit with 'B' suffix, with the space between them
 */
export declare const readableSizeUnit: (combinedStr: string) => string;
