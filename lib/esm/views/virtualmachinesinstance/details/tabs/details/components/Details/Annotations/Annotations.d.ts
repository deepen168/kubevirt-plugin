import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type AnnotationsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const Annotations: React.FC<AnnotationsProps>;
export default Annotations;
