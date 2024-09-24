import { V1beta1DataSource, V1beta1DataVolumeSpec } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { SOURCE_OPTIONS_IDS } from '../../utils/constants';
export declare const getDataVolumeSpec: (dataSource: V1beta1DataSource) => Promise<V1beta1DataVolumeSpec>;
export declare const getSourceTypeFromDataVolumeSpec: (dataVolumeSpec: V1beta1DataVolumeSpec) => string | undefined;
export declare const getGenericSourceCustomization: (diskSourceId: SOURCE_OPTIONS_IDS, url?: string, storage?: string) => V1beta1DataVolumeSpec;
export declare const getPVCSource: (pvcName: string, pvcNamespace: string, storage?: string) => V1beta1DataVolumeSpec;
export declare const appendDockerPrefix: (image: string) => string;
