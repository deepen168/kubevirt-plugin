import { FC } from 'react';
import { K8sModel, K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type CloneResourceModalProps<T extends K8sResourceCommon = K8sResourceCommon> = {
    headerText?: string;
    isOpen: boolean;
    model: K8sModel;
    namespace?: string;
    object: T;
    onClose: () => void;
};
declare const CloneResourceModal: FC<CloneResourceModalProps>;
export default CloneResourceModal;
