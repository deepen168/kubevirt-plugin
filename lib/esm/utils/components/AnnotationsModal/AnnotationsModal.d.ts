import { FC } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import './AnnotationsModal.scss';
export declare const AnnotationsModal: FC<{
    isOpen: boolean;
    obj: K8sResourceCommon;
    onClose: () => void;
    onSubmit: (annotations: {
        [key: string]: string;
    }) => Promise<K8sResourceCommon | void>;
}>;
