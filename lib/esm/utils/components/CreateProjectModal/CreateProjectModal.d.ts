import React from 'react';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type CreateProjectModalProps = {
    createdProject?: (value: K8sResourceCommon) => void;
    isOpen: boolean;
    onClose: () => void;
};
declare const CreateProjectModal: React.FC<CreateProjectModalProps>;
export default CreateProjectModal;
