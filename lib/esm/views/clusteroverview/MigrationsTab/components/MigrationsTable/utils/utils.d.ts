import { V1alpha1MigrationPolicy, V1MigrationConfiguration, V1VirtualMachineInstance, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type MigrationTableDataLayout = {
    metadata: {
        name: string;
    };
    migrationsDefaultConfigurations?: V1MigrationConfiguration;
    mpObj?: V1alpha1MigrationPolicy;
    vmim: V1VirtualMachineInstanceMigration;
    vmiObj: V1VirtualMachineInstance;
};
export declare const getFilteredDurationVMIMS: (vmims: V1VirtualMachineInstanceMigration[], selectedDuration: string) => V1VirtualMachineInstanceMigration[];
export declare const getMigrationsTableData: (vmims: V1VirtualMachineInstanceMigration[], vmis: V1VirtualMachineInstance[], mps: V1alpha1MigrationPolicy[], migrationsDefaultConfigurations: V1MigrationConfiguration, selectedDuration: string) => MigrationTableDataLayout[];
