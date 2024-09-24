import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DedicatedResourcesProps = {
    vmi: V1VirtualMachineInstance;
};
declare const DedicatedResources: FC<DedicatedResourcesProps>;
export default DedicatedResources;
