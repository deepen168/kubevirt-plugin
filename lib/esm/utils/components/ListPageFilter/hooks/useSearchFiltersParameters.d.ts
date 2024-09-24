import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
export declare type TextFiltersType = {
    labels: string[];
    name: string;
} & {
    [key: string]: string;
};
export declare const useSearchFiltersParameters: (searchFilters: RowFilter[]) => TextFiltersType;
