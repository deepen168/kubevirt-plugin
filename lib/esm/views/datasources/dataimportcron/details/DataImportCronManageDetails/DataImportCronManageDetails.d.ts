import React from 'react';
import { V1beta1DataImportCron, V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import './DataImportCronManageDetails.scss';
declare type DataImportCronManageDetailsProps = {
    dataImportCron: V1beta1DataImportCron;
    dataSource: V1beta1DataSource;
    onEditClick: () => void;
};
export declare const DataImportCronManageDetails: React.FC<DataImportCronManageDetailsProps>;
export {};
