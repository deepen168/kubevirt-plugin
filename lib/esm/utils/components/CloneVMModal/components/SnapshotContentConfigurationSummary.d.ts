import { FC } from 'react';
import { V1beta1VirtualMachineSnapshot } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type SnapshotContentConfigurationSummaryProps = {
    snapshot: V1beta1VirtualMachineSnapshot;
};
declare const SnapshotContentConfigurationSummary: FC<SnapshotContentConfigurationSummaryProps>;
export default SnapshotContentConfigurationSummary;
