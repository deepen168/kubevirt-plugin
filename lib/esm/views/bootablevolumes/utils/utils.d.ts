import { V1beta1VirtualMachineClusterPreference } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { BootableResource, BootableVolumeMetadata } from './types';
export declare const getSourcePreferenceLabelValue: (obj: BootableVolume) => string;
export declare const getPreferenceReadableOS: (obj: BootableVolume, preferences: V1beta1VirtualMachineClusterPreference[]) => string;
export declare const getPreferenceOSType: (obj: BootableVolume) => OS_NAME_TYPES;
export declare const deleteBootableVolumeMetadata: (obj: BootableResource) => () => Promise<void>;
export declare const changeBootableVolumeMetadata: (obj: BootableResource, metadata: BootableVolumeMetadata) => () => Promise<void>;
