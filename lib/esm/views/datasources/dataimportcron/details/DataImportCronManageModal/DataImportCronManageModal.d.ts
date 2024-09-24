import { FC } from 'react';
import { V1beta1DataImportCron, V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
export declare type DataImportCronManageFormType = {
    importsToKeep: number;
    schedule: string;
    url: string;
};
declare type DataImportCronManageModalProps = {
    dataImportCron: V1beta1DataImportCron;
    dataSource: V1beta1DataSource;
    isOpen: boolean;
    onClose: () => void;
};
export declare const DataImportCronManageModal: FC<DataImportCronManageModalProps>;
export {};
