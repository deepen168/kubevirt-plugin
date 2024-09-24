import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type HeadlessModeProps = {
    updateHeadlessMode: (checked: boolean) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
};
declare const HeadlessMode: FC<HeadlessModeProps>;
export default HeadlessMode;
