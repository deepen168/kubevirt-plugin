import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare type VirtualMachinesInstancesRowProps = RowProps<V1VirtualMachineInstance, {
    kind: string;
}>;
declare const VirtualMachinesInstancesRow: React.FC<VirtualMachinesInstancesRowProps>;
export default VirtualMachinesInstancesRow;
