import { Dispatch, FC, SetStateAction } from 'react';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './VCPUInput.scss';
declare type vCPUInputProps = {
    cpu: V1CPU;
    isDisabled: boolean;
    setCPU: Dispatch<SetStateAction<V1CPU>>;
};
declare const VCPUInput: FC<vCPUInputProps>;
export default VCPUInput;
