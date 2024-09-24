import { ByteSizeResult } from 'byte-size';
export declare const bytesToIECBytes: (bytes: number, precision: number, customizedUnits?: any) => ByteSizeResult;
export declare const bytesToDiskSize: (size: string) => string;
export declare const bytesFromQuantity: (quantity: number | string, precision?: number) => [value: number, unit: string];
