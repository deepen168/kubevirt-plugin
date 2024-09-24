import { FC } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk-internal/lib/extensions/console-types';
declare type DescriptionModalProps = {
    isOpen: boolean;
    obj: K8sResourceCommon;
    onClose: () => void;
    onSubmit: (description: string) => Promise<K8sResourceCommon | void>;
};
export declare const DescriptionModal: FC<DescriptionModalProps>;
export {};
