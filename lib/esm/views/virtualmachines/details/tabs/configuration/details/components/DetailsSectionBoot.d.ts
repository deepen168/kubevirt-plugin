import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type DetailsSectionBootProps = {
    canUpdateVM: boolean;
    instanceTypeVM?: V1VirtualMachine;
    isCustomizeInstanceType?: boolean;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const DetailsSectionBoot: FC<DetailsSectionBootProps>;
export default DetailsSectionBoot;
