import { FC } from 'react';
import { V1beta1DataImportCron } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import './DataImportCronActions.scss';
declare type DataImportCronActionProps = {
    dataImportCron: V1beta1DataImportCron;
    isKebabToggle?: boolean;
};
declare const DataImportCronActions: FC<DataImportCronActionProps>;
export default DataImportCronActions;
