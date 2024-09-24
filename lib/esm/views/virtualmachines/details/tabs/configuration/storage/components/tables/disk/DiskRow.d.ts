import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { NameWithPercentages } from '@kubevirt-utils/resources/vm/hooks/types';
import { DiskRowDataLayout } from '@kubevirt-utils/resources/vm/utils/disk/constants';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
declare const DiskRow: FC<RowProps<DiskRowDataLayout, {
    customize?: boolean;
    onSubmit?: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    provisioningPercentages: NameWithPercentages;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
}>>;
export default DiskRow;
