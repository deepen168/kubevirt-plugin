import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DedicatedResourcesProps = {
    vm: V1VirtualMachine;
};
declare const DedicatedResources: FC<DedicatedResourcesProps>;
export default DedicatedResources;
