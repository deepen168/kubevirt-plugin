import { FC } from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type OwnerReferencesProps = {
    obj: K8sResourceCommon;
};
declare const OwnerReferences: FC<OwnerReferencesProps>;
export default OwnerReferences;
