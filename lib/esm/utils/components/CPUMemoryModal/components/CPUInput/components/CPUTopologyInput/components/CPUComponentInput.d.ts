import { Dispatch, FC, SetStateAction } from 'react';
import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { CPUComponent } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/utils/utils';
declare type CPUComponentInputProps = {
    cpu: V1CPU;
    cpuComponent: CPUComponent;
    isDisabled: boolean;
    setCPU: Dispatch<SetStateAction<V1CPU>>;
};
declare const CPUComponentInput: FC<CPUComponentInputProps>;
export default CPUComponentInput;
