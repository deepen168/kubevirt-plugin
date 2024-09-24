import { V1beta1VirtualMachineRestore, V1beta1VirtualMachineSnapshot, V1VirtualMachine, V1VolumeSnapshotStatus } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getVolumeSnapshotStatusesPartition: (volumeSnaoshotStatuses: V1VolumeSnapshotStatus[]) => {
    supportedVolumes: V1VolumeSnapshotStatus[];
    unsupportedVolumes: V1VolumeSnapshotStatus[];
};
export declare const validateSnapshotDeadline: (deadline: string) => string;
export declare const getEmptyVMSnapshotResource: (vm: V1VirtualMachine) => V1beta1VirtualMachineSnapshot;
export declare const getVMRestoreSnapshotResource: (snapshot: V1beta1VirtualMachineSnapshot) => V1beta1VirtualMachineRestore;
