import { FC } from 'react';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
import { Filter, FilterKeys, generateRowFilters } from './utils';
declare type RowFiltersProps = {
    filters: Filter;
    filtersNameMap: FilterKeys;
    generatedRowFilters: ReturnType<typeof generateRowFilters>;
    rowFilters: RowFilter[];
    selectedRowFilters: string[];
    updateRowFilterSelected: (id: string[]) => void;
};
declare const RowFilters: FC<RowFiltersProps>;
export default RowFilters;
