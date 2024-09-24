import { FC } from 'react';
import { V1GPU, V1HostDevice, V1VirtualMachine, V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { HARDWARE_DEVICE_TYPE } from '../utils/constants';
import '../hardware-devices-table.scss';
declare type HardwareDevicesModalProps = {
    btnText: string;
    headerText: string;
    initialDevices: V1GPU[] | V1HostDevice[];
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    type: HARDWARE_DEVICE_TYPE.GPUS | HARDWARE_DEVICE_TYPE.HOST_DEVICES;
    vm: V1VirtualMachine;
    vmi?: V1VirtualMachineInstance;
};
declare const HardwareDevicesModal: FC<HardwareDevicesModalProps>;
export default HardwareDevicesModal;
