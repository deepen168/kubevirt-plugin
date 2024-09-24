import { FC, ReactNode } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type DeleteModalProps = {
    body?: ReactNode | string;
    headerText?: string;
    isOpen: boolean;
    obj: K8sResourceCommon;
    onClose: () => void;
    onDeleteSubmit: () => Promise<K8sResourceCommon | void>;
    redirectUrl?: string;
    shouldRedirect?: boolean;
};
declare const DeleteModal: FC<DeleteModalProps>;
export default DeleteModal;
