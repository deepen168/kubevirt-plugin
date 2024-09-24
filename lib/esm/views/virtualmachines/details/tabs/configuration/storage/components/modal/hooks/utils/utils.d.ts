import { V1beta1CDIConfig } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const convertDataVolumeToPVC: (volume: V1Volume, cdiConfig: V1beta1CDIConfig) => V1Volume;
export declare const getVolumeType: (volume: V1Volume) => string;
export declare const getVolumeResourceName: (volume: V1Volume) => string;
