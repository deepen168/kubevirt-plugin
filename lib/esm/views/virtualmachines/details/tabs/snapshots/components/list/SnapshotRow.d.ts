import * as React from 'react';
import { V1beta1VirtualMachineRestore, V1beta1VirtualMachineSnapshot } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare const SnapshotRow: React.FC<RowProps<V1beta1VirtualMachineSnapshot, {
    isVMRunning: boolean;
    restores: Map<string, V1beta1VirtualMachineRestore>;
}>>;
export default SnapshotRow;
