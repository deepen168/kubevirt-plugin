import { FC } from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './labels.scss';
declare type LabelsProps = {
    vmi: V1VirtualMachineInstance;
};
declare const Labels: FC<LabelsProps>;
export default Labels;
