import React from 'react';
import { DeviceType } from '@kubevirt-utils/resources/vm/utils/boot-order/bootOrder';
declare type DeviceTypeIconProps = {
    type: DeviceType;
};
declare const DeviceTypeIcon: React.FC<DeviceTypeIconProps>;
export default DeviceTypeIcon;
