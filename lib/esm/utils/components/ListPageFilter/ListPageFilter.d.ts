import { FC } from 'react';
import { ColumnLayout, K8sResourceCommon, OnFilterChange, RowFilter } from '@openshift-console/dynamic-plugin-sdk';
declare type ListPageFilterProps = {
    columnLayout?: ColumnLayout;
    data?: K8sResourceCommon[];
    hideColumnManagement?: boolean;
    hideLabelFilter?: boolean;
    hideNameLabelFilters?: boolean;
    loaded?: boolean;
    nameFilterPlaceholder?: string;
    onFilterChange?: OnFilterChange;
    rowFilters?: RowFilter[];
    searchFilters?: RowFilter[];
};
declare const ListPageFilter: FC<ListPageFilterProps>;
export default ListPageFilter;
