import { FilterValue, RowFilter } from '@openshift-console/dynamic-plugin-sdk';
import { generateRowFilters } from '../utils';
declare type ListPageFiltersMethodsInputs = {
    applyFilters: (type: string, input: FilterValue) => void;
    generatedRowFilters: ReturnType<typeof generateRowFilters>;
    onRowFilterSearchParamChange: (selected: string[]) => void;
    searchFilters: RowFilter[];
    selectedRowFilters: string[];
    setSearchInputText: (text: string) => void;
};
declare const useListPageFiltersMethods: ({ applyFilters, generatedRowFilters, onRowFilterSearchParamChange, searchFilters, selectedRowFilters, setSearchInputText, }: ListPageFiltersMethodsInputs) => {
    applyTextFilters: (type: string, value?: string) => void;
    applyTextFiltersWithDebounce: any;
    clearAll: () => void;
    updateRowFilterSelected: (id: string[]) => void;
};
export default useListPageFiltersMethods;
