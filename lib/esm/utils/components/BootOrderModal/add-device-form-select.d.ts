import { FC } from 'react';
import { BootableDeviceType } from '@kubevirt-utils/resources/vm/utils/boot-order/bootOrder';
export declare const AddDeviceFormSelect: FC<AddDeviceFormSelectProps>;
export declare type AddDeviceFormSelectProps = {
    id: string;
    label: string;
    /** onAdd moves items from the options list to the sources list, key = "<type>-<name>". */
    onAdd: (key: string) => void;
    onDelete: () => void;
    options: BootableDeviceType[];
};
