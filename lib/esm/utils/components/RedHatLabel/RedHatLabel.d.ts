import { FC } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type RedHatLabelProps<T extends K8sResourceCommon = K8sResourceCommon> = {
    obj: T;
};
declare const RedHatLabel: FC<RedHatLabelProps>;
export default RedHatLabel;
