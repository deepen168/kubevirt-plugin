declare type UseRowFiltersParametersType = (inputs: {
    filterKeys: {
        [key: string]: string;
    };
    filters: {
        [key: string]: string[];
    };
}) => [string[], (selected: string[]) => void];
export declare const useRowFiltersParameters: UseRowFiltersParametersType;
export {};
