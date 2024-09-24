import { V1VirtualMachine, V1VirtualMachineInstance, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
declare type VmiMapper = {
    mapper: {
        [key: string]: {
            [key: string]: V1VirtualMachineInstance;
        };
    };
    nodeNames: {
        [key: string]: {
            id: string;
            title: string;
        };
    };
};
declare type VmimMapper = {
    [key: string]: {
        [key: string]: V1VirtualMachineInstance;
    };
};
export declare const useVMListFilters: (vmis: V1VirtualMachineInstance[], vms: V1VirtualMachine[], vmims: V1VirtualMachineInstanceMigration[]) => {
    filters: RowFilter<V1VirtualMachine>[];
    searchFilters: RowFilter<V1VirtualMachine>[];
    vmiMapper: VmiMapper;
    vmimMapper: VmimMapper;
};
export {};
