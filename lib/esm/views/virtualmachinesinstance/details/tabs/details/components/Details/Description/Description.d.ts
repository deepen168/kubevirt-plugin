import * as React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './description.scss';
declare type DescriptionProps = {
    vmi: V1VirtualMachineInstance;
};
declare const Description: React.FC<DescriptionProps>;
export default Description;
