import * as React from 'react';
import { V1VirtualMachine, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
import './virtual-machine-row-layout.scss';
declare const VirtualMachineRowLayout: React.FC<RowProps<V1VirtualMachine, {
    ips: React.ReactNode | string;
    isSingleNodeCluster: boolean;
    node: React.ReactNode | string;
    vmim: V1VirtualMachineInstanceMigration;
}>>;
export default VirtualMachineRowLayout;
