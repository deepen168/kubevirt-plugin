import * as React from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type ConfirmActionMessageProps = {
    action?: string;
    obj: {
        metadata: {
            name: string;
            namespace: string;
        };
    } | K8sResourceCommon;
};
declare const ConfirmActionMessage: React.FC<ConfirmActionMessageProps>;
export default ConfirmActionMessage;
