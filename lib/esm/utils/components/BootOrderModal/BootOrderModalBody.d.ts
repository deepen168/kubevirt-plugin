import React from 'react';
import { BootableDeviceType } from '@kubevirt-utils/resources/vm/utils/boot-order/bootOrder';
export declare const BootOrderModalBody: React.FC<{
    changeEditMode: (isEditMode: boolean) => void;
    devices: BootableDeviceType[];
    isEditMode: boolean;
    onChange: (disks: BootableDeviceType[]) => void;
}>;
