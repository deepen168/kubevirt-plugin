import { MutableRefObject } from 'react';
export declare type InstanceTypeSize = '2xlarge' | '4xlarge' | '8xlarge' | 'large' | 'medium' | 'micro' | 'nano' | 'small' | 'xlarge';
export declare enum InstanceTypeCategory {
    ComputeIntensive = "ComputeIntensive",
    GeneralPurpose = "GeneralPurpose",
    GpuResourcesAttached = "GpuResourcesAttached",
    MemoryIntensive = "MemoryIntensive"
}
export declare type InstanceTypeSizeDetails = {
    cpus: number;
    label: string;
    memory: string;
    name: InstanceTypeSize;
};
export declare type CategoryDetails = {
    Icon: any;
    instanceTypes: InstanceTypeSizeDetails[];
    prefix: string;
    prefixLabel: string;
    seriesLabel: string;
    title: string;
};
export declare type CategoryDetailsMap = {
    [key in InstanceTypeCategory]: CategoryDetails;
};
export declare type UseInstanceTypeCardMenuSectionValues = {
    activeMenu: string;
    menuRef: MutableRefObject<HTMLDivElement>;
    onMenuSelect: (itName: string) => void;
    onMenuToggle: (event?: React.MouseEvent, menuID?: string) => void;
};
