import { Dispatch, FC, SetStateAction } from 'react';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './CPUInput.scss';
declare type CPUInputProps = {
    currentCPU: V1CPU;
    setUserEnteredCPU: Dispatch<SetStateAction<V1CPU>>;
    userEnteredCPU: V1CPU;
};
declare const CPUInput: FC<CPUInputProps>;
export default CPUInput;
