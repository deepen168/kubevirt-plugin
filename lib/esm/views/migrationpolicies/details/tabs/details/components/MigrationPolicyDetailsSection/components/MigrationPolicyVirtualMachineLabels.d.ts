import { FC } from 'react';
import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationPolicyVirtualMachineLabelsProps = {
    mp: V1alpha1MigrationPolicy;
};
declare const MigrationPolicyVirtualMachineLabels: FC<MigrationPolicyVirtualMachineLabelsProps>;
export default MigrationPolicyVirtualMachineLabels;
