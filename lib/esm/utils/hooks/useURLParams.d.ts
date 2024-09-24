/**
 * A Hook for manipulating URL Parameters and History.
 */
export declare const useURLParams: () => {
    /** A function for appending a URL parameter. if the parameter exists, it will not be overwritten. */
    appendParam: (key: string, value: string) => void;
    /** A function for deleting a URL parameter. */
    deleteParam: (key: string, value?: string) => void;
    params: URLSearchParams;
    /** A function for setting a URL parameter. if the parameter exists, it will be overwritten. */
    setParam: (key: string, value: string) => void;
};
