import * as React from 'react';
import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './MigrationPolicyDetailsNavTitle.scss';
declare type VirtualMachineNavPageTitleProps = {
    mp: V1alpha1MigrationPolicy;
};
declare const VirtualMachineNavPageTitle: React.FC<VirtualMachineNavPageTitleProps>;
export default VirtualMachineNavPageTitle;
