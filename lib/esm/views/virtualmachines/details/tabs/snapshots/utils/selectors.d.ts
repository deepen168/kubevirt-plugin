import { V1beta1VirtualMachineRestore } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getVmRestoreTime: (restore: V1beta1VirtualMachineRestore) => string | undefined;
export declare const getVmRestoreSnapshotName: (restore: V1beta1VirtualMachineRestore) => string;
