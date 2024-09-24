import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance, V1VirtualMachineInstanceMigration } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare const VirtualMachineRow: FC<RowProps<V1VirtualMachine, {
    getVmi: (namespace: string, name: string) => V1VirtualMachineInstance;
    getVmim: (ns: string, name: string) => V1VirtualMachineInstanceMigration;
    isSingleNodeCluster: boolean;
}>>;
export default VirtualMachineRow;
