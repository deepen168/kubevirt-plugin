import { Dispatch, FC, SetStateAction } from 'react';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type CPUTopologyInputProps = {
    cpu: V1CPU;
    hide: boolean;
    isDisabled: boolean;
    setCPU: Dispatch<SetStateAction<V1CPU>>;
};
declare const CPUTopologyInput: FC<CPUTopologyInputProps>;
export default CPUTopologyInput;
