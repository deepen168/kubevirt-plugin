import * as React from 'react';
import { V1beta1DataImportCron } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
declare type DataImportCronPageTitleProps = {
    dataImportCron: V1beta1DataImportCron;
    name: string;
    namespace: string;
};
declare const DataImportCronPageTitle: React.FC<DataImportCronPageTitleProps>;
export default DataImportCronPageTitle;
