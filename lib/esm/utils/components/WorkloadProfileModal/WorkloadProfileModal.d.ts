import { FC } from 'react';
import { WORKLOADS } from '@kubevirt-utils/resources/template';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type WorkloadProfileModalProps = {
    initialWorkload: WORKLOADS;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (workload: WORKLOADS) => Promise<K8sResourceCommon | void>;
};
declare const WorkloadProfileModal: FC<WorkloadProfileModalProps>;
export default WorkloadProfileModal;
