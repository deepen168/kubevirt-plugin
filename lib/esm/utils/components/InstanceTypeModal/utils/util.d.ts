import { InstanceTypeUnion } from '@virtualmachines/details/tabs/configuration/utils/types';
import { InstanceTypesSeries, InstanceTypesSizes, MappedInstanceTypes } from './types';
export declare const getInstanceTypeItemSizePrettyDisplay: (it: InstanceTypeUnion) => string;
export declare const getInstanceTypeClassDisplayAnnotation: (instanceType: InstanceTypeUnion) => string;
export declare const getInstanceTypeDescriptionAnnotation: (instanceType: InstanceTypeUnion) => string;
export declare const getInstanceTypeSeriesAndSize: (instanceType: InstanceTypeUnion) => {
    series: InstanceTypesSeries;
    size: InstanceTypesSizes;
};
export declare const mappedInstanceTypesToSelectOptions: (instanceTypes: InstanceTypeUnion[]) => MappedInstanceTypes;
export declare const getInstanceTypesPrettyDisplaySize: (mappedInstanceTypes: MappedInstanceTypes, instanceTypeSeries: InstanceTypesSeries, instanceTypeSize: InstanceTypeSize) => any;
export declare const getInstanceTypesSizes: (mappedInstanceTypes: MappedInstanceTypes, series: string) => {
    instanceType: InstanceTypeUnion;
    prettyDisplaySize: string;
    series: string;
    seriesDisplayName: string;
    size: string;
}[];
export declare const getInstanceTypeSeriesDisplayName: (mappedInstanceTypes: MappedInstanceTypes, instanceTypeSeries: InstanceTypesSeries) => string | undefined;
export declare const getInstanceTypeFromSeriesAndSize: (mappedInstanceTypes: MappedInstanceTypes, instanceTypeSeries: string, instanceTypeSize: string) => InstanceTypeUnion;
