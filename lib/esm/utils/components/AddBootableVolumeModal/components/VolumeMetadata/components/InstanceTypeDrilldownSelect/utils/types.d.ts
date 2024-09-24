import { ComponentClass } from 'react';
export declare type InstanceTypeSize = {
    cpus: number;
    memory: string;
    sizeLabel: string;
};
export declare type RedHatInstanceTypeSeries = {
    classAnnotation: string;
    classDisplayNameAnnotation: string;
    descriptionAnnotation: string;
    seriesName: string;
    sizes: InstanceTypeSize[];
};
export declare type RedHatInstanceTypeMetadata = {
    Icon: ComponentClass;
    id: string;
    items: RedHatInstanceTypeSeries[];
    label: string;
};
export declare type UserInstanceTypeMetadata = {
    Icon: ComponentClass;
    id: string;
    items: string[];
    label: string;
};
export declare type InstanceTypesMenuItemsData = {
    redHatProvided: RedHatInstanceTypeMetadata;
    userProvided: UserInstanceTypeMetadata;
};
