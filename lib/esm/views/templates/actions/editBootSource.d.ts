import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource, V1beta1DataVolume, V1beta1DataVolumeSpec } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
export declare const createDataVolume: (name: string, namespace: string, bootSource: V1beta1DataVolumeSpec) => V1beta1DataVolume;
export declare const getBootDataSource: (template: V1Template) => Promise<undefined | V1beta1DataSource>;
export declare const getDataSourceDataVolume: (dataSourcePVCName: string, dataSourcePVCNamespace: string) => Promise<undefined | V1beta1DataVolume>;
export declare const hasEditableBootSource: (dataSource: V1beta1DataSource) => boolean;
export declare const editBootSource: (dataSource: V1beta1DataSource, bootSource: V1beta1DataVolumeSpec) => Promise<void>;
export declare const getEditBootSourceRefDescription: (dataSource: V1beta1DataSource, canEditBootSource: boolean) => any;
