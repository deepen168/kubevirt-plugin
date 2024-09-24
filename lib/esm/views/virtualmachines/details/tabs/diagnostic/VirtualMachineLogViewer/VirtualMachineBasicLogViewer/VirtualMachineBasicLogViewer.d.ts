import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type VirtualMachineBasicLogViewerProps = {
    data: string[];
    isExternal?: boolean;
    vmi: V1VirtualMachineInstance;
};
declare const VirtualMachineBasicLogViewer: FC<VirtualMachineBasicLogViewerProps>;
export default VirtualMachineBasicLogViewer;
