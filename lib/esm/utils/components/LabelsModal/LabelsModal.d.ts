import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
import './LabelsModal.scss';
declare type LabelsModalProps = {
    initialLabels?: {
        [key: string]: string;
    };
    isOpen: boolean;
    labelClassName?: string;
    modalDescriptionText?: string;
    obj: K8sResourceCommon;
    onClose: () => void;
    onLabelsSubmit: (labels: {
        [key: string]: string;
    }) => Promise<K8sResourceCommon | void>;
};
export declare const LabelsModal: FC<LabelsModalProps>;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'tags-input': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export {};
