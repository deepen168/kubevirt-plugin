import { FC } from 'react';
import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './MigrationPolicyDetailsSection.scss';
declare type MigrationPolicyDetailsSectionProps = {
    mp: V1alpha1MigrationPolicy;
    pathname: string;
};
declare const MigrationPolicyDetailsSection: FC<MigrationPolicyDetailsSectionProps>;
export default MigrationPolicyDetailsSection;
