import { FC } from 'react';
import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationPolicyEditModalProps = {
    isOpen: boolean;
    mp: V1alpha1MigrationPolicy;
    onClose: () => void;
};
declare const MigrationPolicyEditModal: FC<MigrationPolicyEditModalProps>;
export default MigrationPolicyEditModal;
