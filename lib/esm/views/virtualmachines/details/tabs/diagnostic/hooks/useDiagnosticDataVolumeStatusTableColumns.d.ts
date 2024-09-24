import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { ThSortType } from '@patternfly/react-table/dist/esm/components/Table/base/types';
import { DiagnosticSort } from '../utils/types';
declare type DiagnosticColumn = {
    id: string;
    sort: (columnIndex: any) => ThSortType;
    title: string;
};
declare type UseDiagnosticDataVolumeStatusTableColumns = () => {
    activeColumns: TableColumn<DiagnosticColumn>[];
    columns: TableColumn<DiagnosticColumn>[];
    sorting: DiagnosticSort;
};
declare const useDiagnosticDataVolumeStatusTableColumns: UseDiagnosticDataVolumeStatusTableColumns;
export default useDiagnosticDataVolumeStatusTableColumns;
