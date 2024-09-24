import { FC } from 'react';
import { V1beta1DataImportCron, V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
declare type DeleteDataSourceModalProps = {
    dataImportCron: V1beta1DataImportCron;
    dataSource: V1beta1DataSource;
    isOpen: boolean;
    onClose: () => void;
};
declare const DeleteDataSourceModal: FC<DeleteDataSourceModalProps>;
export default DeleteDataSourceModal;
