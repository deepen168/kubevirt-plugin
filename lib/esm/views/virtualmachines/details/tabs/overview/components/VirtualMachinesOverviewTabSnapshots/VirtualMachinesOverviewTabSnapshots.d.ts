import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './virtual-machines-overview-tab-snapshots.scss';
declare type VirtualMachinesOverviewTabSnapshotsProps = {
    vm: V1VirtualMachine;
};
declare const VirtualMachinesOverviewTabSnapshots: React.FC<VirtualMachinesOverviewTabSnapshotsProps>;
export default VirtualMachinesOverviewTabSnapshots;
