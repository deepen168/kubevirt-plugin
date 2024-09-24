import { FC } from 'react';
import { V1Template } from '@kubevirt-utils/models';
declare type CPUMemoryProps = {
    editable: boolean;
    template: V1Template;
};
declare const CPUMemory: FC<CPUMemoryProps>;
export default CPUMemory;
