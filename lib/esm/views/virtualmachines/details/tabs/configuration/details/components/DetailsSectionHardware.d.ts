import { FC } from 'react';
import { V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { HARDWARE_DEVICE_TYPE } from '@kubevirt-utils/components/HardwareDevices/utils/constants';
declare type DetailsSectionHardwareProps = {
    onSubmit?: (type: HARDWARE_DEVICE_TYPE, updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine>;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const DetailsSectionHardware: FC<DetailsSectionHardwareProps>;
export default DetailsSectionHardware;
