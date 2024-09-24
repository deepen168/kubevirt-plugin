import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type NetworkUtilProps = {
    vmi: V1VirtualMachineInstance;
};
declare const NetworkUtil: React.FC<NetworkUtilProps>;
export default NetworkUtil;
