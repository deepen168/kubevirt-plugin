import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1VirtualMachine, V1VirtualMachineCondition, V1VolumeSnapshotStatus } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { WatchK8sResults } from '@openshift-console/dynamic-plugin-sdk';
import { VirtualizationDataVolumeStatus, VirtualizationStatusCondition, VirtualizationVolumeSnapshotStatus } from './types';
export declare const volumeSnapshotStatusesTransformer: (volumeSnapshotStatuses?: V1VolumeSnapshotStatus[]) => VirtualizationVolumeSnapshotStatus[];
export declare const conditionsTransformer: (conditions?: V1VirtualMachineCondition[]) => VirtualizationStatusCondition[];
export declare const buildDVStatus: (data: WatchK8sResults<{
    [name: string]: V1beta1DataVolume;
}>) => VirtualizationDataVolumeStatus[];
export declare const buildDataVolumeResources: (vm: V1VirtualMachine) => any;
export declare const createURLDiagnostic: (str: string, append: string) => string;
