import { FC } from 'react';
import { V1beta1VirtualMachineSnapshot, V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-overview-tab-snapshots.scss';
declare type VirtualMachinesOverviewTabSnapshotsRowProps = {
    snapshot: V1beta1VirtualMachineSnapshot;
    vm: V1VirtualMachine;
};
declare const VirtualMachinesOverviewTabSnapshotsRow: FC<VirtualMachinesOverviewTabSnapshotsRowProps>;
export default VirtualMachinesOverviewTabSnapshotsRow;
