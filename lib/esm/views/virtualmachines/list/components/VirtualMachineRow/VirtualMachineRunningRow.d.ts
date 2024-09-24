import * as React from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare const VirtualMachineRunningRow: React.FC<RowProps<V1VirtualMachine, {
    isSingleNodeCluster: boolean;
    vmi: V1VirtualMachineInstance;
    vmim: V1VirtualMachineInstanceMigration;
}>>;
export default VirtualMachineRunningRow;
