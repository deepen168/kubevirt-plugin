import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachinesInstancePageHeaderProps = {
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachinesInstancePageHeader: React.FC<VirtualMachinesInstancePageHeaderProps>;
export default VirtualMachinesInstancePageHeader;
