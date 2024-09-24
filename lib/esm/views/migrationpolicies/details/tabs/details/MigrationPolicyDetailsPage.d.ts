import { FC } from 'react';
import { V1alpha1MigrationPolicy } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './MigrationPolicyDetailsPage.scss';
declare type MigrationPolicyDetailsPageProps = {
    obj: V1alpha1MigrationPolicy;
};
declare const MigrationPolicyDetailsPage: FC<MigrationPolicyDetailsPageProps>;
export default MigrationPolicyDetailsPage;
