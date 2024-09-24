/// <reference types="react" />
import { K8sResourceCommon, MatchExpression, RowFilter, Selector } from '@openshift-console/dynamic-plugin-sdk';
import { TextFiltersType, useSearchFiltersParameters } from './hooks/useSearchFiltersParameters';
export declare type Filter = {
    [key: string]: string[];
};
export declare type FilterKeys = {
    [key: string]: string;
};
export declare const getInitialSearchType: (customSearchFilter: RowFilter[], textFilters: TextFiltersType, filterDropdownItems: Record<string, string>) => string;
export declare const generateRowFilters: (rowFilters: RowFilter[], data: K8sResourceCommon[]) => ({
    items: {
        count: any;
        id: string;
        title: string;
        hideIfEmpty?: string | undefined;
    }[];
    filterGroupName: string;
    type: string;
    filter: (input: import("@openshift-console/dynamic-plugin-sdk").FilterValue, obj: any) => boolean;
    defaultSelected?: string[] | undefined;
    isMatch: (obj: any, id: string) => boolean;
} | {
    items: {
        count: any;
        id: string;
        title: string;
        hideIfEmpty?: string | undefined;
    }[];
    filterGroupName: string;
    type: string;
    filter: (input: import("@openshift-console/dynamic-plugin-sdk").FilterValue, obj: any) => boolean;
    defaultSelected?: string[] | undefined;
    reducer: (obj: any) => import("react").ReactText;
})[];
export declare const fuzzyCaseInsensitive: (a: string, b: string) => boolean;
export declare const getFiltersData: (generatedRowFilters: any) => any;
export declare const intersection: (a: string[], b: string[]) => string[];
export declare const getLabelsAsString: (obj: K8sResourceCommon) => string[];
export declare const labelParser: (resources: K8sResourceCommon[]) => Set<string>;
export declare const requirementToString: (requirement: MatchExpression) => string;
export declare const createEquals: (key: string, value: string) => MatchExpression;
export declare const toRequirements: (selector?: Selector) => MatchExpression[];
export declare const getInitialSearchText: (searchText: ReturnType<typeof useSearchFiltersParameters>, searchFilterType: string) => string;
export declare const getSearchTextPlaceholder: (searchType: string, selectedSearchFilter: RowFilter, nameFilterPlaceholder: string) => any;
