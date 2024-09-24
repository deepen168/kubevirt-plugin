import { V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { OnFilterChange, RowFilter } from '@openshift-console/dynamic-plugin-sdk';
import { MigrationTableDataLayout } from '../components/MigrationsTable/utils/utils';
export declare type UseMigrationCardDataAndFiltersValues = {
    filters: RowFilter<any>[];
    loaded: boolean;
    loadErrors: any;
    migrationsTableFilteredData: MigrationTableDataLayout[];
    migrationsTableUnfilteredData: MigrationTableDataLayout[];
    onFilterChange: OnFilterChange;
    vmims: V1VirtualMachineInstanceMigration[];
};
declare type UseMigrationCardDataAndFilters = (duration: string) => UseMigrationCardDataAndFiltersValues;
declare const useMigrationCardDataAndFilters: UseMigrationCardDataAndFilters;
export default useMigrationCardDataAndFilters;
