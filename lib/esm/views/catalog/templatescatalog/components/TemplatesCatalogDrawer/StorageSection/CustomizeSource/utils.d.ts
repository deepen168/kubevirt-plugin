import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataVolumeSpec, V1ContainerDiskSource } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { SOURCE_OPTIONS_IDS } from '../constants';
export declare const getQuantityFromSource: (source: V1beta1DataVolumeSpec) => any;
export declare const getSourceTypeFromDiskSource: (diskSource: V1beta1DataVolumeSpec | V1ContainerDiskSource) => SOURCE_OPTIONS_IDS;
export declare const getGenericSourceCustomization: (diskSourceId: SOURCE_OPTIONS_IDS, url?: string, storage?: string, storageClassName?: string) => V1beta1DataVolumeSpec;
export declare const getContainerDiskSource: (imageURL: string) => V1ContainerDiskSource;
export declare const getPVCSource: (pvcName: string, pvcNamespace: string, storage?: string, storageClassName?: string) => V1beta1DataVolumeSpec;
export declare const getRegistryHelperText: (template: V1Template) => any;
