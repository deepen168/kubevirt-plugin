import { V1beta1DataImportCron, V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
export declare const isDataSourceReady: (dataSource: V1beta1DataSource) => boolean | undefined;
export declare const getDataSourceCronJob: (dataSource: V1beta1DataSource) => any;
export declare const getDataSourceLastUpdated: (dataSource: V1beta1DataSource) => string | undefined;
export declare const isDataImportCronAutoUpdated: (dataSource: V1beta1DataSource, dataImportCron: V1beta1DataImportCron) => boolean;
export declare const isDataResourceOwnedBySSP: (dataResource: V1beta1DataImportCron | V1beta1DataSource) => boolean;
