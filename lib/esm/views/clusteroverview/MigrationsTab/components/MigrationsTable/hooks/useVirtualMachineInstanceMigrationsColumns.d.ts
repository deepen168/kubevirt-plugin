import { TableColumn } from '@openshift-console/dynamic-plugin-sdk';
import { MigrationTableDataLayout } from '../utils/utils';
declare const useVirtualMachineInstanceMigrationsColumns: () => [
    TableColumn<MigrationTableDataLayout>[],
    TableColumn<MigrationTableDataLayout>[]
];
export default useVirtualMachineInstanceMigrationsColumns;
