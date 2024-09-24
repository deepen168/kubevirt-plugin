import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { VirtualizationDataVolumeStatus, VirtualizationStatusCondition, VirtualizationVolumeSnapshotStatus } from '../utils/types';
declare type UseDiagnosticData = (vm: V1VirtualMachine) => {
    conditions: VirtualizationStatusCondition[];
    dataVolumesStatuses: VirtualizationDataVolumeStatus[];
    volumeSnapshotStatuses: VirtualizationVolumeSnapshotStatus[];
};
declare const useDiagnosticData: UseDiagnosticData;
export default useDiagnosticData;
