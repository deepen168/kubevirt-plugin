export declare type Debounce = {
    func: (any: any) => any;
    immediate: boolean;
    wait: number;
};
/**
 * @param func Function to debounce
 * @param wait Number of milliseconds to wait before invoking the function again
 * @param immediate If set to true, func is invoked immediately and will be invoked
 *    on the leading edge of the timeout. If set to false, func will be invoked on
 *    the trailing edge of the timeout.
 */
export declare function debounce(func: (any: any) => any, wait?: number, immediate?: boolean): (...args: any[]) => void;
