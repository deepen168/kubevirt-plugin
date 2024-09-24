import { FC } from 'react';
import { V1beta1DataImportCron } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
declare type DataImportCronDetailsPageProps = {
    obj?: V1beta1DataImportCron;
};
declare const DataImportCronDetailsPage: FC<DataImportCronDetailsPageProps>;
export default DataImportCronDetailsPage;
