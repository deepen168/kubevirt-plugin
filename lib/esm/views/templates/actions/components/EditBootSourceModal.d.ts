import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import './EditBootSourceModal.scss';
declare type EditBootSourceModalProps = {
    dataSource: V1beta1DataSource;
    isOpen: boolean;
    obj: V1Template;
    onClose: () => void;
};
declare const EditBootSourceModal: FC<EditBootSourceModalProps>;
export default EditBootSourceModal;
