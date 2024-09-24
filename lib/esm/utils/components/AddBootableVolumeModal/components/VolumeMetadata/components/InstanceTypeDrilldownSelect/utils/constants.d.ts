import { ComponentClass } from 'react';
import { InstanceTypeSize } from '@catalog/CreateFromInstanceTypes/components/SelectInstanceTypeSection/utils/types';
import { InstanceTypesMenuItemsData } from './types';
export declare const MENUS: {
    redHatProvided: string;
    root: string;
    series: string;
    sizes: string;
    userProvided: string;
};
export declare const initialMenuItems: InstanceTypesMenuItemsData;
export declare const instanceTypeSeriesNameMapper: {
    [key: string]: {
        disabled?: boolean;
        Icon: ComponentClass;
        possibleSizes?: InstanceTypeSize[];
        seriesLabel: string;
    };
};
export declare const REDHAT_COM = "redhat.com";
export declare const INSTANCETYPE_CLASS_ANNOTATION = "instancetype.kubevirt.io/class";
export declare const INSTANCETYPE_DESCRIPTION_ANNOTATION = "instancetype.kubevirt.io/description";
export declare const INSTANCETYPE_CLASS_DISPLAY_NAME = "instancetype.kubevirt.io/displayName";
