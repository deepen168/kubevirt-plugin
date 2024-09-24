import { Selector } from '@openshift-console/dynamic-plugin-sdk';
export declare type ItemsToFilterProps = {
    id: string;
    title: string;
};
export declare type ListPageProps = {
    fieldSelector?: string;
    hideColumnManagement?: boolean;
    hideNameLabelFilters?: boolean;
    hideTextFilter?: boolean;
    kind?: string;
    nameFilter?: string;
    namespace?: string;
    selector?: Selector;
    showTitle?: boolean;
};
