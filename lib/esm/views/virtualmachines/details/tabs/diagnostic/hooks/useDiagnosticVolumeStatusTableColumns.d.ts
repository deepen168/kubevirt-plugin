import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { ThSortType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
import { DiagnosticSort } from '../utils/types';
declare type DiagnosticColumn = {
    id: string;
    sort: (columnIndex: any) => ThSortType;
    title: string;
};
declare type UseDiagnosticVolumeStatusTableColumns = () => {
    activeColumns: TableColumn<DiagnosticColumn>[];
    columns: TableColumn<DiagnosticColumn>[];
    sorting: DiagnosticSort;
};
declare const useDiagnosticVolumeStatusTableColumns: UseDiagnosticVolumeStatusTableColumns;
export default useDiagnosticVolumeStatusTableColumns;
