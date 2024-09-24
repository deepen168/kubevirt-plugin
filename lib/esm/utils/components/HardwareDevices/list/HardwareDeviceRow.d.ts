import * as React from 'react';
import { V1GPU, V1HostDevice } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
export declare type HardwareDeviceRowProps = {
    obj: V1GPU | V1HostDevice;
};
declare const HardwareDeviceRow: React.FC<RowProps<V1GPU | V1HostDevice, {
    handleRemoveDevice: (device: V1GPU | V1HostDevice) => void;
}>>;
export default HardwareDeviceRow;
