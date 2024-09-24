import { ThSortType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
declare type GetSorting = (column: string, columnIndex: number) => ThSortType;
declare type UseDiagnosticSort = () => {
    getSorting: GetSorting;
    sort: {
        column: string;
        direction: 'asc' | 'desc';
        sortIndex: number;
    };
};
declare const useDiagnosticSort: UseDiagnosticSort;
export default useDiagnosticSort;
