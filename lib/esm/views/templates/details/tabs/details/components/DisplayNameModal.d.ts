import { FC } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk-internal/lib/extensions/console-types';
declare type DisplayNameModalProps = {
    isOpen: boolean;
    obj: K8sResourceCommon;
    onClose: () => void;
    onSubmit: (displayName: string) => Promise<K8sResourceCommon | void>;
};
declare const DisplayNameModal: FC<DisplayNameModalProps>;
export default DisplayNameModal;
