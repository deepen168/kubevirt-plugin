import { FC } from 'react';
import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type MigrationPoliciesActionsProps = {
    isKebabToggle?: boolean;
    mp: V1alpha1MigrationPolicy;
};
declare const MigrationPoliciesActions: FC<MigrationPoliciesActionsProps>;
export default MigrationPoliciesActions;
