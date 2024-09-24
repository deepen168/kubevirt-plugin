import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { ThSortType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
import { DiagnosticSort } from '../utils/types';
declare type DiagnosticColumn = {
    id: string;
    sort: (columnIndex: any) => ThSortType;
    title: string;
};
declare type UseDiagnosticConditionsTableColumns = () => [
    columns: TableColumn<DiagnosticColumn>[],
    activeColumns: TableColumn<DiagnosticColumn>[],
    sort: DiagnosticSort,
    loadedColumns: boolean
];
declare const useDiagnosticConditionsTableColumns: UseDiagnosticConditionsTableColumns;
export default useDiagnosticConditionsTableColumns;
